import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAttachment } from './interfaces/attachment-interface';
import { cloudinary } from './cloudinaryConfig';
import * as moment from 'moment';
import { IAttachmentData } from './interfaces/attachment-data';
import { IFileRemoveInterface } from './interfaces/file-remove.interface';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable()
export class FilesService {
  constructor(
    @InjectModel('Attachment') private attachmentModel: Model<IAttachment>,
  ) {}

  async uploadFiles(files): Promise<IAttachmentData> {
    const base64 = Buffer.from(files.buffer.data).toString('base64');
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${base64}`,
    );

    const createAttachment = new this.attachmentModel({
      user: files._id,
      link: result.url,
      fileId: result.public_id,
      contentType: result.resource_type,
      postId: '',
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    });
    const attachmentData = {
      user: files._id,
      link: result.url,
      fileId: result.public_id,
    };
    await createAttachment.save();
    return attachmentData;
  }

  async removeFiles(fileId: IFileRemoveInterface) {
    const result = cloudinary.uploader.destroy(fileId.fileId);
    await this.attachmentModel.deleteOne({ fileId: fileId.fileId });
    return result;
  }

  async attachmentSend(fileId) {
    return await Promise.all(
      fileId.fileId.map(item => {
        return this.attachmentModel.updateOne(
          { fileId: item },
          { $set: { postId: fileId.postId } },
        );
      }),
    );
  }
}
