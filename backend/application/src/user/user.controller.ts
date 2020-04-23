import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, ILoginUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user-decorator';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
  }

  @Post('register')
  async register(@Body()createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginUser: ILoginUserDto) {
    return this.userService.login(loginUser);
  }

  @Post('forgot')
  async forgotPassword(@Body() email: string) {
    return this.userService.forgotPassword(email);
  }

  @Get('test')
  async test() {
    return 'hello world';
  }

}
