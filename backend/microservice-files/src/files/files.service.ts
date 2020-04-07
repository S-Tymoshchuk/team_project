import { Injectable } from '@nestjs/common';
import { cloudinary } from './cloudinaryConfig';

@Injectable()
export class FilesService {

  async uploadFiles(files) {
    const base64 = Buffer.from(files.buffer.data).toString('base64');
    try {
      const result = await cloudinary.uploader.upload(`data:image/png;base64,${base64}`);
      return result;
    } catch (e) {
      throw e;
    }
  }
}
