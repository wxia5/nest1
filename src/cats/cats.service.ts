import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }
  getByName(name: string){
      return this.cats.filter((e) => {
        return e.name === name;
      });

  }
  findAll(): Cat[] {
    return this.cats;
  }
}