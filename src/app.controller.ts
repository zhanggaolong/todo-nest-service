import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {

  @Get('/')
  notFound(): string {
    return 'not Found';
  }
}