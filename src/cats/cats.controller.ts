import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {

  @Post('/name')
  create(@Body() createCatDto: CreateCatDto): string {
    return 'This action adds a new cat';
  }

  @Get('/all')
  async findAll(@Res({passthrough: true}) res: Response): Promise<any> {
    res.status(HttpStatus.OK);
    return 'This action returns all cats';
  }
}