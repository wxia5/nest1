import { Entity } from 'typeorm';

@Entity()
export class Cat{
    readonly name: string;
    readonly age: number;
    readonly sex: string;

}