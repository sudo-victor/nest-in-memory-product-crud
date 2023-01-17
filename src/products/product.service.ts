import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';

/**
 * Name String
 * Price Number
 * Amount Number
 */

@Injectable()
export class ProductService {
  products = [];

  create(product: CreateProductDto) {
    this.products.push(product);
  }

  findAll() {
    return this.products;
  }
}
