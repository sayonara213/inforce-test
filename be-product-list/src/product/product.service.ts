import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment/comment.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async getProductById(id: string): Promise<Product> {
    return this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.comments', 'comment')
      .select(['product', 'comment'])
      .where('product.id = :id', { id })
      .getOne();
  }

  async getProduct(id: string): Promise<Product> {
    return this.getProductById(id);
  }

  async getProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async addProduct(product: Omit<Product, 'id'>): Promise<Product> {
    return this.productRepository.save(product);
  }

  async updateProduct(
    id: string,
    product: Omit<Product, 'id'>,
  ): Promise<Product> {
    await this.productRepository.update(id, product);
    return this.productRepository.findOne({ where: { id: id } });
  }

  async deleteProduct(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }

  async addComment(productId: string, comment: string) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
      relations: ['comments'],
    });

    const newComment = this.commentRepository.create({
      description: comment,
      date: new Date(),
    });
    newComment.product = product;

    await this.commentRepository.save(newComment);
  }

  async deleteComment(commentId: string) {
    await this.commentRepository.delete(commentId);
  }
}
