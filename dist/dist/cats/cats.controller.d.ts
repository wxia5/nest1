import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: Cat): Promise<void>;
    findAll(): Promise<Cat[]>;
}
