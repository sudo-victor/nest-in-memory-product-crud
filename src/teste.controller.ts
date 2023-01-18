import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Minhas Rotas do controller Teste')
@Controller('teste')
export class TesteController {
  @Get()
  hello() {
    return 'hi there';
  }
}
