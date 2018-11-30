import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { CatsController } from './cats/cats.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'postgis_25_sample',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), PhotoModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .exclude(
      //   {
      //   path:"cats",
      //   method:RequestMethod.POST
      //  },
      //  {
      //   path:"cats",
      //   method:RequestMethod.GET
      //  })
       .with('xwq')
      .forRoutes(CatsController);
  }
}