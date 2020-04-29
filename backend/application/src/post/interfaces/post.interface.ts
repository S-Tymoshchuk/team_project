import { ISchedule } from './schedule.interface';

export interface IPost {
  readonly title: string;
  readonly body: string;
  readonly fileId: string;
  readonly schedule: ISchedule;
}
