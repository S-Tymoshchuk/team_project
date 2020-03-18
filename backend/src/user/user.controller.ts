import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserLogin } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userService.login(createUserDto);
  }
}
