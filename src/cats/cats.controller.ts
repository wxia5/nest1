
import { CatsService } from './cats.service';

import { Cat } from './cat.entity';
import { Controller, Post, Body, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: Cat): Promise<Cat>{
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
      return this.catsService.findAll();
  }
}