import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'neet';
  }
}

@Injectable()
export class StSixService {
  getStSix(): string {
    return 'MLはちょっと';
  }
}
