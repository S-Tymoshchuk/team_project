import { Body, Controller,  Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() user: CreateUserDto) {
    console.log(user);
    return this.userService.login(user);
  }
}
