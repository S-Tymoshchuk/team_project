import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { IForgotEmailDto } from './interfaces/forgot-email.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @MessagePattern('register')
  async register(@Body() createUserDto: CreateUserDto):Promise<CreateUserDto> {
    return await this.usersService.create(createUserDto);
  }

  @MessagePattern('forgotPassword')
  async forgotPassword(@Body() payload: IForgotEmailDto):Promise<IForgotEmailDto> {
    return await this.usersService.forgotPassword(payload);
  }
}
