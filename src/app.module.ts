import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './products/product.module';
import { TesteController } from './teste.controller';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [TesteController],
  imports: [ProductModule, UsersModule, AuthModule],
})
export class AppModule {}
