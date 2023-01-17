import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Criar um documento OpenApi
  const configSwagger = new DocumentBuilder()
    .setTitle('Api de Produtos')
    .setDescription('blablabla')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('my-api', app, document);

  await app.listen(3000);
}
bootstrap();
