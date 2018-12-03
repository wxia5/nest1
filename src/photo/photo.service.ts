import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, getConnection } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }
  add(photo: Photo){
      const geom = JSON.parse(photo.geom4);
      photo.geom4 = geom;
      return this.photoRepository.save(photo);
  }
  edit(photo: Photo){
    return this.photoRepository.update(photo.id, photo);
    // return getConnection().createQueryBuilder().update(Photo).set(
    //   {name: photo.name},
    // ).where('id=:id', {id: photo.id}).execute();
  }
  async delete(id: number){
    const photoToRemove = await this.photoRepository.findOne(id);
    return this.photoRepository.remove(photoToRemove);
  }
  async getByParam(photo: Photo){
    const photoFind =  await this.photoRepository.find(photo);
    return photoFind;
  }
  // aync; queryJosn(){
  //   return await this.photoRepository.createQueryBuilder().where("name  =:name",{
  //     name:{

  //     }
  //   })
  // }
}