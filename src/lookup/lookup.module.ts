import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { LookupController } from './lookup.controller';
import { LookupService } from './lookup.service';
import { DataSchema } from './schemas/lookup.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'lookup', schema: DataSchema}])],
  controllers: [LookupController],
  providers: [LookupService]
})
export class LookupModule {}
