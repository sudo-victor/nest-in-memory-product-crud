import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { ApiTags, ApiResponseOptions } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductService } from './product.service';

@ApiTags('produtos em portugues')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return id;
  }

  @Get()
  findAll(@Res() res: Response) {
    const products = this.productService.findAll();
    return res.status(200).json({ products });
  }

  @Post()
  create(@Res() response: Response, @Body() product: CreateProductDto) {
    this.productService.create(product);
    return response.status(201).json({ product });
  }

  @Patch()
  updatePartial() {
    return { message: 'Deu Bom' };
  }
}
