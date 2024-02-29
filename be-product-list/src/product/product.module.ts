import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Comment } from './comment/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Comment])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
