import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Staff } from './schemas/staff.schema';
import { Model } from 'mongoose';
import { hash, compare } from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { Workbook } from 'exceljs';
import { ChatGateway, DbState } from 'src/chat/chat.gateway';
import { Payload } from 'src/datatypes';
import { Cron } from '@nestjs/schedule';
// import { DbState } from 'src/datatypes';

@Injectable()
export class StaffService {

  constructor(
    @InjectModel(Staff.name) private staffModel: Model<Staff>,
    @Inject(ChatGateway) private chatcmd: ChatGateway,
    private jwtAuthServ: JwtService) { }

    @Cron('1 1,13 * * *') // @Cron('1 1,13 * * *') // @Cron('0 */12 * * *') // @Cron('*/2 * * * *') https://crontab.guru/
  async handleScheduleCron() {
    console.log('Inicio reagendar:', Date.now());
    await this.endStaffAppoint();
    // console.log('actualizado...');
    console.log('Fin reagendar:', Date.now())
  }

  async endStaffAppoint() {
    const d = new Date();
    let date = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours() - 2).getTime();
    const failAppointList = [];
    // (await this.staffModel.find({'appoint.dateend': {$lt: date}, 'appoint.sche_schedule': {$ne: 'n'}})).forEach(staff => {
    (await this.staffModel.find({ 'appoint.dateend': { $lt: date } })).forEach(async staff => {
      // console.log('staff:',staff);
      const appointList = JSON.parse(JSON.stringify(staff.appoint));
      let i = 0;
      while (i < appointList.length) {
        const appoint = appointList[i];
        if (!appoint.ended) { failAppointList.push(appoint); }
        if (appoint.sche_schedule === 'n' && appoint.ended === true) { appointList.splice(i, 1); break; } else {
          const dt = new Date(appoint.datetime);
          const dte = new Date(appoint.dateend || 0);
          let dt0 = dt.getTime(); let dte0 = dte.getTime(); i++;
          switch (appoint.sche_schedule) {
            case 'd':
              dt0 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + 1, dt.getHours(), dt.getMinutes()).getTime();
              dte0 = new Date(dte.getFullYear(), dte.getMonth(), dte.getDate() + 1, dte.getHours(), dte.getMinutes()).getTime();
              break;
            case 's':
              dt0 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + 7, dt.getHours(), dt.getMinutes()).getTime();
              dte0 = new Date(dte.getFullYear(), dte.getMonth(), dte.getDate() + 7, dte.getHours(), dte.getMinutes()).getTime();
              break;
            case 'o':
              dt0 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + appoint.sche_other, dt.getHours(), dt.getMinutes()).getTime();
              dte0 = new Date(dte.getFullYear(), dte.getMonth(), dte.getDate() + appoint.sche_other, dte.getHours(), dte.getMinutes()).getTime();
              break;
            case 'm':
              dt0 = new Date(dt.getFullYear(), dt.getMonth() + 1, dt.getDate(), dt.getHours(), dt.getMinutes()).getTime();
              dte0 = new Date(dte.getFullYear(), dte.getMonth() + 1, dte.getDate(), dte.getHours(), dte.getMinutes()).getTime();
              break;
          }
          appoint.datetime = dt0;
          appoint.dateend = dte0;
          appoint.ended = false;
        }
      }

      staff.appoint = appointList;
      const user = { id: staff._id, name: 'MESSAGE', rol: ['A'] };
      // await this.chatcmd.handleNotifCMD(DbState.update, 'message', staff._id, user, failListB.owner, adata);
      
      await this.staffModel.findByIdAndUpdate(staff._id, staff, { new: true });
    });
    // update fail appoint
    const failListByOwner: { owner: string, data: string[] }[] = [];
    failAppointList.forEach(failItem => {
      const data = `${failItem.staff_name} -> ${failItem.pollgrp_model_name} ${new Date(failItem.datetime).toLocaleString()} `;
      const fbo = failListByOwner.find(failListB => failListB.owner === failItem.owner);
      if (fbo) { fbo.data.push(data) } else { failListByOwner.push({ owner: failItem.owner, data: [data] }) }
    });

    failListByOwner.forEach(async failListB => {
      const user = { id: failListB.owner, name: 'MESSAGE', rol: ['A'] };
      const adata = `<strong>Agenda no cumplida:</strong><hr><ul><li>${failListB.data.join('</li><li>')}</ul>`
      await this.chatcmd.handleNotifCMD(DbState.update, 'message', failListB.owner, user, failListB.owner, adata);
    });
  }

  async create(createStaffDto: CreateStaffDto, user: Payload): Promise<Staff> {
    const createdStaff = new this.staffModel(createStaffDto);

    const { _id, names, lastnames } = createdStaff;
    const adata = { names, lastnames }
    await this.chatcmd.handleNotifCMD(DbState.insert, 'staff', _id.toString(), user, _id.toString(), adata);
    return createdStaff.save();
  }

  async login(updateStaffDto: CreateStaffDto) {
    const { email, password } = updateStaffDto;
    /*
    Es el correo maestro. Puede cambiarse desde env. Por el momento crea el campo si no existe
    en el futuro crea el campo y envía correo con nueva constraseña
    */
    if (process.env.MASTER_EMAIL === email) {
      updateStaffDto.names = process.env.MASTER_EMAIL;
      updateStaffDto.active = true;
      // updateStaffDto.password = '';
      updateStaffDto.rol = ['K', 'P', 'F', 'U', 'D', 'A'];
      // let id = ObjectId  isValidObjectId(process.env.MASTER_EMAIL);
      const query = { email: process.env.MASTER_EMAIL }
      // Por ahora agrego password pero en el futuro podrá ser solo el correo
      updateStaffDto.password = 'abcd0123';
      const plainToHash = await hash(password, Number(process.env.HASH));
      updateStaffDto = { ...updateStaffDto, password: plainToHash };
      const options = { upsert: true, new: true, setDefaultsOnInsert: true };
      updateStaffDto = await this.staffModel.findOneAndUpdate(query, updateStaffDto, options);
      // updateStaffDto.password = 'ABCDEFGH'; // Ahora pasa el proceso
      // return this. update(id, updateStaffDto);
    }
    // ......................
    // return await this.staffModel.findOne({ email: email }).exec();


    // const {email, password} = updateStaffDto;
    const userStaff = await this.staffModel.findOne({ email });
    if (!userStaff) throw new HttpException('USER_NOT_FOUND', 404);
    // Si está bacío Asigna el nuevo password
    if (!userStaff.password || userStaff.password.length === 0) {
      if (!(updateStaffDto.password && updateStaffDto.password.length >= 4)) throw new HttpException('PASSWORD_NOT_PROVIDED', 405);
      const plainToHash = await hash(password, Number(process.env.HASH));
      updateStaffDto = { ...updateStaffDto, password: plainToHash };
      return this.staffModel.findByIdAndUpdate(userStaff._id, updateStaffDto).exec();
    }
    const checkPass = await compare(password, userStaff.password);
    if (!checkPass) throw new HttpException('INVALID_PASSWORD', 403);

    const payload: Payload = { id: userStaff._id.toString(), name: userStaff.names, rol: userStaff.rol }
    //     const token = await this.jwtAuthServ.signAsync(payload);
    const token = this.jwtAuthServ.sign(payload);
    const data = { userStaff, token };
    return data;
  }

  // ........................................
  findByActive(active: boolean, arol: string): Promise<Staff[]> {
    return this.staffModel.find({ active, rol: { $in: [arol] } }).exec();
  }

  findAll(): Promise<Staff[]> {
    // paginated
    return this.staffModel.find().exec();
  }

  findByStars(stars: number, arol: string): Promise<Staff[]> {
    // paginated
    return this.staffModel.find({ active: true, stars, rol: { $in: arol } }).exec();
  }

  findByQueryFilter(filterQuery: any): Promise<Staff[]> {
    const { queryType, active, age_from, age_to, city, rol, stars, studyLevel, email } = filterQuery;
    const options = {};
    switch (queryType) {
      case '0':
        return this.staffModel.find().exec();
        break;
      case '1': // Active
        options['active'] = active;
        break;
      case '2': // stars
        options['active'] = true;
        options['stars'] = stars;
        break;
      case '3': // Full
        // options['active'] = true;
        if (active) { options['active'] = active }
        if (age_from && age_to) {
          options['age'] = { $gt: age_from };
          options['age'] = { $lt: age_to };
        }
        if (city && city.length > '') {
          const aCity = city.split[','];
          options['city'] = { $in: aCity };
        }
        if (studyLevel != null) {
          options['studyLevel'] = studyLevel;
        }
        if (rol) {
          options['rol'] = { $in: rol };
        }
        if (stars) {
          options['stars'] = stars;
        }
        if (email) { options['email'] = email; }
        break;
      case '4': // rol
        options['rol'] = { $in: rol };
        break;
      case '5': // correo
        options['email'] = email;
        break;
    }
    return this.staffModel.find(options)
  }

  // ......................................................

  async findOne(id: string): Promise<Staff> {
    return await this.staffModel.findById(id).exec();
  }

  async update(id: string, updateStaffDto: UpdateStaffDto, user: Payload) {

    let { names, lastnames } = updateStaffDto;
    if (lastnames === undefined) lastnames = '';
    const adata = { names, lastnames }
    await this.chatcmd.handleNotifCMD(DbState.update, 'staff', id, user, id, adata);

    return await this.staffModel.findByIdAndUpdate(id, updateStaffDto, { new: true });
  }

  async remove(id: string, user: Payload) {

    // const { names, lastnames  } = updateStaffDto;
    const adata = { id }
    await this.chatcmd.handleNotifCMD(DbState.delete, 'staff', id, user, id, adata);

    return await this.staffModel.findByIdAndRemove(id);
  }

  // ........................... IMPORT FROM EXCEL ................

  async excel2Staff(file: Express.Multer.File) {
    const staffArray: Staff[] = [];
    // const pictArray: string[] = [];
    const workbook = new Workbook();
    await workbook.xlsx.readFile(file.path).then((workbook) => {
      const worksheetStaff = workbook.getWorksheet("staff");
      const headerRows = 2;
      const staffRowC = worksheetStaff.actualRowCount; // determine the range of populated data
      for (let i = headerRows; i <= staffRowC; i++) {
        const formData = {
          'active': true,
          'email': worksheetStaff.getRow(i).getCell(5).value,
          'id': worksheetStaff.getRow(i).getCell(3).value,
          'names': worksheetStaff.getRow(i).getCell(1).value,
          'phone': worksheetStaff.getRow(i).getCell(6).value,
          'rol': worksheetStaff.getRow(i).getCell(7).value.toString().split(',').push('A'),
          'lastnames': worksheetStaff.getRow(2).getCell(7).value
        }
        staffArray.push(formData as unknown as Staff);
      }
    });
    await this.staffModel.deleteMany();
    await this.staffModel.insertMany(staffArray).then((result: any) => {
      if (result.length > 0) {
        return { status: 200, message: 'ok' }
      }
    });

  }
}
