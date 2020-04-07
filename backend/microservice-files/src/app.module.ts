import { Module } from '@nestjs/common';
import { FilesModule } from './files/files.module';
import { configModule } from '../configure.root';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [FilesModule, configModule, MongooseModule.forRoot('mongodb://localhost/27017',{useNewUrlParser: true, useUnifiedTopology: true})]
})
export class AppModule {}
