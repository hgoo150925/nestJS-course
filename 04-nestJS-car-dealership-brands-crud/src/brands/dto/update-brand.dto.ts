// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

import { IsString, MinLength } from 'class-validator';

export class UpdateBrandDto {
  // validaciones
  @IsString()
  @MinLength(1) // recibe minimo una letra
  name: string;
}
