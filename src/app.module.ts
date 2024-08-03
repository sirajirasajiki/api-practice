import { Module } from '@nestjs/common';
import {
  AppController,
  TestController,
  StSixController,
} from './app.controller';
import { AppService, StSixService } from './app.service';
import { HelloController } from './test.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    TestController,
    StSixController,
    HelloController,
  ],
  providers: [AppService, StSixService],
})
export class AppModule {}
