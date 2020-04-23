import { Module } from '@nestjs/common';
import { SocialConnectModule } from './social-connect/social-connect.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [SocialConnectModule, MongooseModule.forRoot('mongodb://localhost:27017/test',{useNewUrlParser: true, useUnifiedTopology: true})]
})
export class AppModule {}
