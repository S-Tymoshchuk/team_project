import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { configModule } from '../../configure.root';
import { MongooseModule } from '@nestjs/mongoose';
import { AttachmentSchema } from './schema/attachement.schema';

@Module({
  imports:[configModule, MongooseModule.forFeature([{ name: 'Attachment', schema: AttachmentSchema },])],
  controllers:[FilesController],
  providers:[FilesService]
})
export class FilesModule {}
