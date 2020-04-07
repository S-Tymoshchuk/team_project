import { Module } from '@nestjs/common';
import { FilesModule } from './files/files.module';
import { configModule } from '../configure.root';

@Module({
  imports: [FilesModule, configModule]
})
export class AppModule {}
