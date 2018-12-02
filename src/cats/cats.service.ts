import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {
  // private readonly cats: Cat[] = [];
  constructor(
    @InjectRepository(Cat)
    private readonly catsRepository: Repository<Cat>,
  ) {}
  create(cat: Cat): Promise<Cat> {
    const geom = JSON.parse(cat.geom);
    cat.geom = geom;
    return this.catsRepository.save(cat);
  }
  // getByName(name: string){
  //     return this.cats.filter((e) => {
  //       return e.name === name;
  //     });

  // }
  async findAll(): Promise<Cat[]>{
    return this.catsRepository.find();
}
}