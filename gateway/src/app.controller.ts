import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('login')
  async login(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.appService.login(createUserDto);
  }
}
