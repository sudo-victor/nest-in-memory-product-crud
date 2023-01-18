import { Module } from '@nestjs/common';
import { ProductModule } from './products/product.module';
import { CarsModule } from './cars/cars.module';
import { PokemonsModule } from './pokemons/pokemons.module';
import { TesteController } from './teste.controller';

@Module({
  controllers: [TesteController],
  imports: [ProductModule, CarsModule, PokemonsModule],
})
export class AppModule {}
