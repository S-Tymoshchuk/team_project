import { Body, Controller } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { MessagePattern } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { IAccessToken } from './interfaces/access-token';


@Controller()
export class AuthController {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService,
  ) {
  }

  @MessagePattern('login')
  async login(@Body() loginUser): Promise<IAccessToken> {
    return await this.authService.login(loginUser);
  }
}
