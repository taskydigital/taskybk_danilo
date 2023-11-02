/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import { OnStartEnd } from 'src/datatypes';

export type PollResultDocument = HydratedDocument<PollResult>;

@Schema()
export class PollResult {

    @Prop({ type: [Object] })
    chats: any[];

    @Prop()
    date_end_schedule: number;

    @Prop()
    date_end?: number;

    @Prop()
    date_ini?: number;

    @Prop()
    date_ini_schedule: number;

    @Prop()
    ended: boolean;

    @Prop()
    geoLocEnd?: string;

    @Prop()
    geoLocStart?: string;

    @Prop()
    newChat?: boolean;

    @Prop()
    platform?: string;

    @Prop()
    pollGrpLogo: string;

    @Prop()
    pollGrpName: string;

    @Prop()
    pollsGrp_id: string; // _id del PollGroup

    @Prop()
    price?: number;

    @Prop()
    staff__id?: string; // _id del staff

    @Prop()
    staffId?: string;

    @Prop()
    staff_name?: string;

    @Prop()
    staff_picture?: string;

    @Prop()
    staff_star?: number;

    @Prop()
    staff_uid?: string;

    @Prop()
    status_date: number;

    @Prop()
    status: number; // 0: Ninguno, 1: Seleccionado, 2: En proceso, 3: Finalizado 4:Aprobado 5:pagado

    @Prop({ type: Object })
    values?: { [index: string]: any };
}

export const PollsResultSchema = SchemaFactory.createForClass(PollResult);
