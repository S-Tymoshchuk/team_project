import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(private fileService: FilesService) {
  }


  @MessagePattern('uploadFiles')
  async uploadFiles(files) {
    return this.fileService.uploadFiles(files);
  }

  @MessagePattern('removeFile')
  async removeFiles(file) {
    return this.fileService.removeFiles(file);
  }

  @MessagePattern('attachmentSend')
  async attachmentSend(fileId) {
    return this.fileService.attachmentSend(fileId);
  }
}
