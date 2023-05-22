import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'App NestJS - Nginx - PostgreSQQL- Redis e pgAdmin 4';
  }
}
