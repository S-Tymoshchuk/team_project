import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { PostController } from './post/post.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { PostService } from './post/post.service';
import { PostModule } from './post/post.module';
import { FilesController } from './files/files.controller';
import { FilesService } from './files/files.service';
import { FilesModule } from './files/files.module';
import { SocialConnectModule } from './social-connect/social-connect.module';
import { SchedulesController } from './schedules/schedules.controller';
import { SchedulesService } from './schedules/schedules.service';
import { SchedulesModule } from './schedules/schedules.module';

@Module({
  imports: [UserModule, PostModule, FilesModule, SocialConnectModule, SchedulesModule],
  controllers: [UserController, PostController, FilesController, SchedulesController],
  providers: [UserService, PostService, FilesService, SchedulesService],
})
export class AppModule {
}
