import { Document } from 'mongoose';

export interface IPost extends Document{
 readonly title: string;
 readonly body:string;
 readonly createdAt:Date;
}
