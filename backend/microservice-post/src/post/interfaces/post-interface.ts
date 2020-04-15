import { Document } from 'mongoose';
import { IAttachmentDate } from './attachment-date';

export interface IPost extends Document {
  readonly user: string;
  readonly title: string;
  readonly body: string;
  readonly createdAt: Date;
  attachments: IAttachmentDate[];
}
