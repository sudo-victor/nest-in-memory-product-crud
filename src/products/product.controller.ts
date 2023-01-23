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
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { Author } from 'src/decoratos/author.decorator';
import { AuthGuard } from 'src/guards/auth.guard';
import { ParseDatePipe } from 'src/pipes/parse-date.pipe';
import { ParseIntPipe } from 'src/pipes/parse-int.pipe';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductService } from './product.service';

@ApiTags('produtos em portugues')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string, @Author() author: string) {
    console.log(author);
    return id;
  }

  @Get()
  findAll(@Res() res: Response, @Query('date', ParseDatePipe) date: string) {
    console.log(date);
    const products = this.productService.findAll();
    return res.status(200).json({ products });
  }

  @Post()
  create(@Res() response: Response, @Body() product: CreateProductDto) {
    this.productService.create(product);
    return response.status(201).json({ product });
  }

  @Patch(':id')
  updatePartial(@Body('') product: any, @Param('id') id: string) {
    return { message: 'Deu Bom' };
  }
}
