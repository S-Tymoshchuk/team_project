export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  timezone: string;
  avatar: string;
  avatarId: number;
}

export class ILoginUserDto {
  email: string;
  password: string;
}
