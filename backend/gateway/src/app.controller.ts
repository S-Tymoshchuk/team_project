import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { IUser, ILoginUserDto } from './interfaces/user.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('register')
  async register(user: IUser): Promise<IUser> {
    return await this.appService.register(user);
  }

  @MessagePattern('login')
  async login(user: ILoginUserDto): Promise<ILoginUserDto> {
    return await this.appService.login(user);
  }

  @MessagePattern('forgotPassword')
  async forgotPassword(email:string) {
    return await this.appService.auth(email);
  }
}
