import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './products/product.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductModule, UsersModule, AuthModule],
})
export class AppModule {}
