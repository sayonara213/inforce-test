import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Comment } from './comment/comment.entity';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 120 })
  imageUrl: string;

  @Column({ type: 'varchar', length: 200 })
  name: string;

  @Column({ type: 'int' })
  count: number;

  @Column({ type: 'int' })
  weight: number;

  @OneToMany(() => Comment, (comment) => comment.product)
  comments: Comment[];
}
