import { Entity, Column, PrimaryGeneratedColumn, getManager, Index } from 'typeorm';

@Entity()
export class Photo {
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
  @Column('geometry', {
    nullable: true,
  })
  @Index({
    spatial: true,
  })
  geom4: string;
}