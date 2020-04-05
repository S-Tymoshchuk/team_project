import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';
import { mailConfig } from './mail-message/mail.config';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';
import * as passportGenerator from 'password-generator';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const { password } = createUserDto;
    const hash = await this.genSalt(password);
    const createdUser = new this.userModel(
      _.assign(createUserDto, { password: hash }),
    );
    return await createdUser.save();
  }

  async forgotPassword(payload: string)/*: Promise<avoid>*/ {
    const userForgot = await this.findByEmail(payload);
    const { email, firstName } = userForgot;
    const generatePassword = await passportGenerator(12, false);
    const hashPassword = await this.genSalt(generatePassword);

    const res = await this.userModel.updateOne(
      { _id: userForgot._id },
      { $set: { password: hashPassword } },
    );
    await mailConfig(email, generatePassword, firstName);
  }

  async checkPassword(payload: any) {
    const { password } = payload;

    const user = await this.findByEmail(payload);
    if (!user) {
      throw new UnauthorizedException();
    }
    if (await bcrypt.compare(password, user.password)) {
      return this.sanitizeUser(user);
    } else {
      return null;
    }
  }

  async genSalt(payload) {
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hash = await bcrypt.hash(payload, salt);
    return hash;
  }

  async findByEmail(payload) {
    const { email } = payload;
    return this.userModel.findOne({ email });
  }

  sanitizeUser(user) {
    const sanitized = user.toObject();
    //delete sanitized['password'];
    delete sanitized['_id'];
    return sanitized;
  }
}
