import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
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
  @UseGuards(AuthGuard())
  @Post('login')
  async login(@Body() loginUser: ILoginUserDto) {
    return this.userService.login(loginUser);
  }

  @Post('forgot')
  async forgotPassword(@Body() email: string) {
    return this.userService.forgotPassword(email);
  }

  @UseGuards(AuthGuard())
  @Post('test')
  test(@GetUser() user: any) {
    console.log(user);
  }

}