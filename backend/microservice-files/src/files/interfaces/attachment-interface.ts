import { Document } from 'mongoose';

export interface IAttachment extends Document {
  readonly user: string;
  readonly link: string;
  readonly fileId: string;
  readonly contentType: string;
  readonly postId: string;
  readonly createdAt: Date
}
