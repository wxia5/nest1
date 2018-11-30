import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: Cat) {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
      return this.catsService.findAll();
  }
}