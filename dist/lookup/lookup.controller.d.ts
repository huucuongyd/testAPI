import { Model } from 'mongoose';
import { CreateDataDto } from './dtos/data.dto';
import { LookupService } from './lookup.service';
import { DataDocument } from './schemas/lookup.schema';
export declare class LookupController {
    private readonly service;
    constructor(service: LookupService);
    model: Model<DataDocument[]>;
    findAll(): Promise<any>;
    createData(data: CreateDataDto): Promise<any>;
}
