export class LoginUserDto {
  email: string;
  password: string;
}

export class CreateUserDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: any ;
  readonly timezone: string;
  readonly avatar: string;
  readonly avatarId: number;
}

export interface UserLogin {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  timezone: string;
  avatar: string;
  avatarId: number;
}
