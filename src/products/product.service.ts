import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  products = [];

  create(product: any) {
    this.products.push(product);
  }

  findAll() {
    return this.products;
  }
}
