import { Module } from '@nestjs/common';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { JwtStrategy } from './user/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './user/local.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [PostsController, UserController],
  providers: [PostsService, UserService, LocalStrategy, JwtStrategy],
  exports:[UserService]
})
export class AppModule {
}
