import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
        // fs.writeFile('input.txt', obj,  function(err) {
        //     if (err) {
        //         return console.error(err);
        //     }
        //  });
        const [xwq, name] = args;
        console.log(xwq);
        console.log(name);
        next();
    };
  }
}