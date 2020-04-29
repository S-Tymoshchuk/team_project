import { ISchedule } from './schedule.interface';

export class IPost {
  title: string;
  body: string;
  fileId: string[];
  schedule: ISchedule;
}
