import { Model } from 'mongoose';
import { CreateDataDto } from './dtos/data.dto';
export declare class LookupService {
    private model;
    constructor(model: Model<any>);
    findAll(): Promise<any>;
    create(createData: CreateDataDto): Promise<any>;
    addlookup(objid: string): Promise<any>;
}
