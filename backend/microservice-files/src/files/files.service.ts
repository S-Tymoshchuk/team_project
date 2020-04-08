import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAttachment } from './interfaces/attachment-interface';
import { cloudinary } from './cloudinaryConfig';

@Injectable()
export class FilesService {
  constructor(@InjectModel('Attachment') private attachmentModel: Model<IAttachment>) {
  }

  async uploadFiles(files): Promise<IAttachment>  {

    const base64 = Buffer.from(files.buffer.data).toString('base64');

    try {
      const result = await cloudinary.uploader.upload(`data:image/png;base64,${base64}`);

      const createAttachment = new this.attachmentModel({
        link: result.url,
        fileId: result.public_id,
        contentType: result.resource_type,
        createdAt:new Date()
      });

      return await createAttachment.save();
    } catch (e) {
      throw e;
    }
  }
}
