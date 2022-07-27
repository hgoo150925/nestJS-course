import { IsString, MinLength } from 'class-validator';

export class CreateBrandDto {
  // validaciones
  @IsString()
  @MinLength(1) // recibe minimo una letra
  name: string;
}
