import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './user/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user/schema/user.schema';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PostModule } from './post/post.module';
import { SocialController } from './social/social.controller';
import { SocialService } from './social/social.service';
import { SocialModule } from './social/social.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),MongooseModule.forRoot('mongodb://localhost:27017', {
    useNewUrlParser: true,
  }),
    UserModule, PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '24h' },
    }),
    PostModule,
    SocialModule,
    ConfigModule.forRoot()
    ],
  controllers: [AppController, UserController, PostController, SocialController],
  providers: [AppService, UserService, JwtStrategy, PostService, SocialService],
})
export class AppModule {
}
