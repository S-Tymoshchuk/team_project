import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import axios from 'axios';
import * as qs from 'qs';
import * as moment from 'moment';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../user/get-user-decorator';
import { ILoginData } from './interfaces/login-data.interface';
import { ILinkedinConnect } from './interfaces/linkedin-connect.inerface';
import { SocialService } from './social.service';


@Controller('social')
export class SocialController {
  constructor(private socialService: SocialService) {
  }

  @Post('test')
  async test(@Body()name) {
    return this.socialService.named(name);
  }

  @UseGuards(AuthGuard())
  @Post('connect')
  async connectLink(@GetUser() user, @Body()client) {
    const code = await axios({
      method: 'get',
      url: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${client.clientId}&redirect_uri=https://www.example.com/auth/linkedin&scope=r_liteprofile%20r_emailaddress%20w_member_social`,
    });

  }

  @UseGuards(AuthGuard())
  @Post('linkedin')
  async createAccesToken(@GetUser() user, @Body()loginData: ILoginData) {
    const exchangeCode = {
      'grant_type': 'authorization_code',
      'code': `${loginData.code}`,
      'redirect_uri': 'https://www.example.com/auth/linkedin',
      'client_id': process.env.client_id,
      'client_secret': process.env.client_secret,
    };

    try {
      const response = await axios(`https://www.linkedin.com/oauth/v2/accessToken`, {
        method: 'POST',
        data: qs.stringify(exchangeCode),
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      });
      const linkedinConnect: ILinkedinConnect = {
        providerId: loginData.provider,
        userId: user._id,
        createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        accessToken: response.data.access_token,
        expiresAt: moment().add(moment.duration(response.data.expires_in)).format('YYYY-MM-DD HH:mm:ss'),
      };
      return await this.socialService.loginLinkedin(linkedinConnect);
    } catch (error) {
      console.log(error);
    }
  }
  @UseGuards(AuthGuard())
  @Post('linkedinIn')
  async linkedIn(@Body()token) {
    try {
      const response = await axios('https://api.linkedin.com/v2/me', {
        method: 'GET',
        headers: {
          Connection: 'Keep-Alive',
          Authorization: `Bearer ${token.token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }

  }

}
