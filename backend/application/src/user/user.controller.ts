import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, ILoginUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtGuard } from './jwt.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

    @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }

    //@UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Body() loginUser:ILoginUserDto) {
      return this.userService.login(loginUser);
    }

    // @UseGuards(JwtGuard)
    // @Get('test')
    // test() {
    //   return 'hello world';
    // }
    //
    // @UseGuards(AuthGuard('jwt'))
    // @Get('test2')
    // test2() {
    //   return 'hello world';
    // }

  @Post('forgot')
    async forgotPassword(@Body() email: string) {
      return this.userService.forgotPassword(email);
    }
}
