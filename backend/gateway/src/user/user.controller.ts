import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';
import { IUser, ILoginUserDto } from 'src/interfaces/user.interface';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('register')
  async register(user: IUser): Promise<IUser> {
    return await this.userService.register(user);
  }

  @MessagePattern('login')
  async login(user: ILoginUserDto): Promise<ILoginUserDto> {
    return await this.userService.login(user);
  }

  @MessagePattern('forgotPassword')
  async forgotPassword(email:string) {
    return await this.userService.auth(email);
  }
}
