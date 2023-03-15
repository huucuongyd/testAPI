import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { model, Model } from 'mongoose';
import { CreateDataDto } from './dtos/data.dto';
import { LookupService } from './lookup.service';
import { DataDocument } from './schemas/lookup.schema';

@Controller('lookup')
export class LookupController {
    constructor(private readonly service:LookupService){}
    model: Model<DataDocument[]>;

    @Get()
    async findAll(): Promise<any> {
        return await this.service.findAll()
    }

    @Post()
    async createData(@Body() data: CreateDataDto){
       const add = await this.service.create(data)

       const res = await this.service.addlookup(add._id)

       return res
    }
}
