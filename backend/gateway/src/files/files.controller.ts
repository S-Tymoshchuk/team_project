import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { FilesService } from './files.service';


@Controller('files')
export class FilesController {
  constructor(private filesService: FilesService) {
  }


  @MessagePattern('uploadFiles')
  async uploadFiles(files) {
    return await this.filesService.uploadFiles(files);
  }

  @MessagePattern('removeFile')
  async removeFiles(file) {
    return await this.filesService.removeFiles(file);
  }
}
