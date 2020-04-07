import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { configModule } from '../configure.root';




@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017', {
      useNewUrlParser: true,
    }),
    AuthModule,
    configModule
  ],
})
export class AppModule {}
