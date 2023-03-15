import { Module } from '@nestjs/common';
import * as path from 'path';
import {
  AcceptLanguageResolver,
  I18nJsonLoader,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LookupModule } from './lookup/lookup.module';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      fallbacks:{
        
      },
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
    MongooseModule.forRoot(
      'mongodb+srv://huucuongyd:Anhcuong1@testserver.1axdnyx.mongodb.net/lookuptest',
    ),
    LookupModule,
  ],
  controllers: [AppController],
})
export class AppModule {}