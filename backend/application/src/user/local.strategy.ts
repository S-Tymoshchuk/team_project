import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { ILoginUserDto } from './dto/create-user.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  constructor(private userService: UserService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    // const res = await this.userService.login(loginUser);
    const user = { username, password };
    const res = this.userService.login(user);
    return res;
  }
}
