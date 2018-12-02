import { Entity, Column, PrimaryGeneratedColumn, getManager, Index } from 'typeorm';
import { isString } from 'util';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column(
    {
      nullable: true,
      transformer: {
        from: val => !!val,
        to: val => !!val,
    },
    },
  )
  isPublished: string;
  @Column({
    default: 111,
  })
  height: string;
  @Column({
    type: 'geometry',
    nullable: true,
    srid: 4326,
  })
  @Index({
    // spatial: true,
  })
  geom: string;
}