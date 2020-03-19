import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from '../../backend/src/user/dto/create-user.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('login')
  async login(createUserDto: CreateUserDto) {
    return this.appService.login(createUserDto);
  }
}
