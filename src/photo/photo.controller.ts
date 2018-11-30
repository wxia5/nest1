import { Controller, Get, Post, Body } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
    constructor(private readonly photoService: PhotoService){}
    @Get()
    getAllPhoto(){
        return this.photoService.findAll();
    }
    @Post()
    addPhoto(@Body() photo: Photo){
        return this.photoService.add(photo);
    }
}
