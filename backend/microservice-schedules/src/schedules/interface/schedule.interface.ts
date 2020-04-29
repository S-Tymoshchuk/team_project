import { Document } from 'mongoose';

export interface ISchedule extends Document {
  providerId: string[];
  postId: string;
  userId: string;
  startsAt: string;
  status: string;
}
