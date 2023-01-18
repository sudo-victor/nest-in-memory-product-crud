import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePokemonDto {
  @ApiProperty()
  @IsString()
  name: string;
}
