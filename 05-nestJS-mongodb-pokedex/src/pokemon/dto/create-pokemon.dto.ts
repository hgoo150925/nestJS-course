import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

// CreatePokemonDto es la data que voy a recibir para insertar en la DB
export class CreatePokemonDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;
}
