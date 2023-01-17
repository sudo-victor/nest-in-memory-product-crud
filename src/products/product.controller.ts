import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':sobson')
  findOne(@Param('sobson') id: string) {
    return id;
  }

  @Get()
  findAll(@Res() res: Response) {
    const products = this.productService.findAll();
    return res.status(200).json({ products });
  }

  @Post('')
  create(@Res() response: Response, @Body() product: any) {
    this.productService.create(product);
    return response.status(200).json({ product });
  }
}
