import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { configModule } from '../../configure.root';
import { MongooseModule } from '@nestjs/mongoose';
import { AttachementSchema } from './schema/attachement.schema';

@Module({
  imports:[configModule, MongooseModule.forFeature([{ name: 'Attachement', schema: AttachementSchema },])],
  controllers:[FilesController],
  providers:[FilesService]
})
export class FilesModule {}
