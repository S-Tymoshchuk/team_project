import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
  readonly timezone: string;
  readonly avatar: string;
  readonly avatarId: number;
}
