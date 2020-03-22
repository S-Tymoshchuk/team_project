import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const createdUser = new this.userModel(createUserDto);
    console.log(createUserDto);
    return await createdUser.save();
  }

  login(loginUserDto: LoginUserDto) {
    return loginUserDto;
  }
}
