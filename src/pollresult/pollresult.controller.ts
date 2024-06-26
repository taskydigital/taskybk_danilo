import { Controller, Get, Post, Body, Param, Delete, Query, Put, UseGuards } from '@nestjs/common';
import { PollresultService } from './pollresult.service';
import { CreatePollresultDto } from './dto/create-pollresult.dto';
import { UpdatePollresultDto } from './dto/update-pollresult.dto';
// import { FilesInterceptor } from '@nestjs/platform-express';
// import { join } from 'path';
// import * as fs from 'fs';
// import { Observable, of } from 'rxjs';
import { Roles } from 'src/staff/roles.decorator';
import { RolesGuard } from 'src/staff/roles.guard';
import { User } from 'src/staff/user.decorator';

@Controller('pollresult')
export class PollresultController {
  constructor(private readonly pollresultService: PollresultService) { }

  /*
  @Get('picture/:imagename')
  getImageByName(@Param('imagename') imagename, @Res() res): Observable<object> {
    const upr = imagename.toUpperCase().split('__');
    let apath = process.env.RAILWAY_VOLUME_MOUNT_PATH;
    if (process.env.DEV_STATUS === 'true') {
      apath = join(__dirname, process.env.DEFA_DIR);
    }
    apath = join(apath, upr[0], upr[1]);

    return of(res.sendFile(apath));
  }

  @Post('pictures1')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles1(@UploadedFiles() files: Array<Express.Multer.File>) {
    const resultpath: string[] = [];
    let apath = process.env.RAILWAY_VOLUME_MOUNT_PATH;
    if (process.env.DEV_STATUS === 'true') {
      apath = join(__dirname, process.env.DEFA_DIR);
      if (!fs.existsSync(apath)) { fs.mkdirSync(apath); }
    }
    const dir = files[0].originalname.toUpperCase();
    apath = join(apath, dir);
    if (!fs.existsSync(apath)) { fs.mkdirSync(apath); }
    for (let i = 1; i < files.length; i++) {
      const upr = files[i].originalname.toUpperCase();
      const destPath = join(apath, upr);
      fs.writeFileSync(destPath, files[i].buffer);
      resultpath.push(destPath);
    }
    return { status: 200, message: resultpath }
  }
  */

  @Roles('A')
  @UseGuards(RolesGuard)
  @Post()
  async create(@Body() createPollresultDto: CreatePollresultDto, @User() user: any) {
    return await this.pollresultService.create(createPollresultDto, user);
  }

  @Get('filter/data?')
  async findByFilter(
    @Query('filter') filter: number,
    @Query('status') status: number,
    @Query('pollGrp_id') pollGrp_id: string,
    @Query('date_ini') date_ini: number,
    @Query('date_end') date_end: number,
  ) {
    filter = Number(filter);
    status = Number(status);
    date_ini = Number(date_ini);
    date_end = Number(date_end);
    switch (filter) {
      case 0: // all
        return await this.pollresultService.findByGroup(pollGrp_id);
        break;
      case 1: // status
        return await this.pollresultService.findByStatus(pollGrp_id, status, date_ini, date_end);
        break;
      case 2: // date all
        return await this.pollresultService.findByDate(pollGrp_id, date_ini, date_end);
        break;
    }
  }

  @Roles('K')
  @UseGuards(RolesGuard)
  @Get('staffresult/data?')
  async findByStaffResult(
    @Query('status') status: number,
    @Query('date_ini') date_ini: number,
    @Query('date_end') date_end: number,
    @User() user: any) {
    return await this.pollresultService.findByStaffResult(user.id, status, +date_ini, +date_end);
  }

  @Get('analitic/data?')
  async findByAnalitic(
    @Query('crm') crm: string,
    @Query('staff__id') staff__id: string,
    @Query('pollGrp') pollGrp: string,
    @Query('costumData') costumData: string,
    @Query('prodData') prodData: string,
    @Query('date_ini') date_ini: number,
    @Query('date_end') date_end: number,) {
    const staff__idList = JSON.parse(staff__id);
    const pollGrpList = JSON.parse(pollGrp);
    const costumList = JSON.parse(costumData);
    const ProdList = JSON.parse(prodData);
    return await this.pollresultService.findByAnalitic(crm, staff__idList, pollGrpList, costumList, ProdList, +date_ini, +date_end);
  }

  @Get('chat/:id')
  async findChat(@Param('id') id: string) {
    return await this.pollresultService.getChat(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.pollresultService.findOne(id);
  }

  @Get()
  findAll() {
    return this.pollresultService.findAll();
  }

  @Roles('A')
  @UseGuards(RolesGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePollresultDto: UpdatePollresultDto, @User() user: any) {
    return this.pollresultService.update(id, updatePollresultDto, user);
  }

  @Roles('A')
  @UseGuards(RolesGuard)
  @Put('partial/:id')
  updatePartial(@Param('id') id: string, @Body() data: any, @User() user: any) {
    return this.pollresultService.updatePartial(id, data, user);
  }

  @Roles('A')
  @UseGuards(RolesGuard)
  @Put('partial_pollgrp/:pollGrp_id')
  updatePartGrp(@Param('pollGrp_id') pollGrp_id: string, @Body() data: any) {
    return this.pollresultService.updatePartGrp(pollGrp_id, data);
  }
  
  @Roles('A')
  @UseGuards(RolesGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @User() user: any) {
    return await this.pollresultService.remove(id, user);
  }

}
