import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginUser): Promise<string> {
    const user = await this.usersService.checkPassword(loginUser);
    if (!user) {
      throw new UnauthorizedException();
    }
    const createToken = {
      email: user.email,
      id: user._id
    };

    const token = await this.jwtService.sign(createToken, { expiresIn: '7d' });
    return token;
  }
}
