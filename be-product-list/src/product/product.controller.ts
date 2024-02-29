import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('products')
  async getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Get('product/:id')
  async getProduct(@Param('id') id: string): Promise<Product> {
    return this.productService.getProduct(id);
  }

  @Post('product')
  async addProduct(@Body() product: Omit<Product, 'id'>): Promise<Product> {
    return this.productService.addProduct(product);
  }

  @Put('product/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() product: Omit<Product, 'id'>,
  ): Promise<Product> {
    return this.productService.updateProduct(id, product);
  }

  @Post('product/comment/:id')
  async addComment(
    @Param('id') id: string,
    @Body('comment') comment: string,
  ): Promise<void> {
    return this.productService.addComment(id, comment);
  }

  @Delete('product/:id')
  async deleteProduct(@Param('id') id: string): Promise<void> {
    return this.productService.deleteProduct(id);
  }
}
