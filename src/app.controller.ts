import {
  Controller,
  Get,
  Post,
  Redirect,
  Query,
  Param,
  Body,
} from '@nestjs/common';
import { AppService, StSixService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':doc')
  findOne(@Param() params: any): string {
    console.log(params.doc);
    return `This action returns a #${params.doc} cat`;
  }
}

@Controller('dogs')
export class TestController {
  @Get('test')
  getHello(): string {
    return 'test';
  }

  @Get()
  findAll(): string {
    return 'find';
  }
}

@Controller('st6')
export class StSixController {
  constructor(private readonly appService: StSixService) {}

  @Get()
  getStSix(): string {
    return this.appService.getStSix();
  }
  @Get('test')
  async findAll(): Promise<any[]> {
    return ['neei'];
  }
}

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}


