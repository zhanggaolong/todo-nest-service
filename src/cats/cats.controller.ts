import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(
    private catsService: CatsService
  ) {}

  @Get()
  notFound(): string {
    return 'not Found';
  }

  @Post('/name')
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get('/all')
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}