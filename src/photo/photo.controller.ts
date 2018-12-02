import { Controller, Get, Post, Body, HttpException, HttpStatus, UseFilters, UseGuards } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
import { ForbiddenException } from 'src/common/exception/forbidden.exception';
import { HttpExceptionFilter } from '../common/exception/filter/http-exception.filter';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('photo')
@UseGuards(AuthGuard)
export class PhotoController {
    constructor(private readonly photoService: PhotoService){}
    @Get()
    // @UseFilters(new HttpExceptionFilter())
    getAllPhoto(){
        // throw new ForbiddenException();
        return this.photoService.findAll();
    }
    @Post()
    addPhoto(@Body() photo: Photo){
        return this.photoService.add(photo);
    }
}

function identity<T>(arg: T): T {
    return arg;
}
function identityArr<T>(arg: T[]): T[]{
    const length = arg.length;
    console.log(length);
    return arg;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['q', 'w', 'e'];
identityArr(arr1);
identityArr(arr2);