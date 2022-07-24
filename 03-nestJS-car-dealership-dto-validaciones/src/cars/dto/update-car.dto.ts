import { IsOptional, IsString, IsUUID } from 'class-validator';

// el DTO sería el objeto JSON que se transfiere desde el cliente al servidor (o viceversa) para realizar la operativa necesaria para el funcionamiento de la aplicación
// https://desarrolloweb.com/articulos/dto-nest-framework#:~:text=Qu%C3%A9%20es%20un%20DTO&text=En%20las%20aplicaciones%20de%20Nest,el%20funcionamiento%20de%20la%20aplicaci%C3%B3n.
export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;
}
