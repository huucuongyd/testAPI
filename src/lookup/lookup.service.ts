import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, mongo } from 'mongoose';
import { CreateDataDto } from './dtos/data.dto';
import { Data ,DataDocument} from './schemas/lookup.schema';

@Injectable()
export class LookupService {
    constructor(@InjectModel('lookup') private model: Model<any>) {}
    async findAll(): Promise<any> {
        const id = new mongoose.Types.ObjectId('63ff06ca057efdafbb877e09')
        return await this.model.aggregate([
            
            {
               $match:
                  {
                    _id:id
                  }
            }
         ])
      }


    async create(createData: CreateDataDto): Promise<any> {
        const createdCat = new this.model(createData);
        return createdCat.save();
      }
    async addlookup(objid: string): Promise<any>{
        const res = await this.model.aggregate([
            {
                $match:{
                    _id: objid
                }
            },
            {
                $addFields:{
                    OBJ: {
                        $toObjectId:'$add_id'
                    }
                }
            },
            {
               $lookup:
                  {
                    from:"addtolookup",
                    localField:"OBJ",
                    foreignField:"_id",
                    as:"add"
                  }
            },
            {
                $project:{
                    _id:0,
                    OBJ:0
                }
            }
         ])

         console.log(res[0].add)
    }
}