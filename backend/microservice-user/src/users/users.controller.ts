import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { LoginUserDto, CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('login')
  async login(loginUserDto: LoginUserDto) {
    console.log(loginUserDto);
    return await this.usersService.login(loginUserDto);
  }

  @MessagePattern('register')
  async register(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return await this.usersService.create(createUserDto);
  }
}
