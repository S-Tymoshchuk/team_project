import { Body, Controller,  Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userService.login(createUserDto);
  }
}
