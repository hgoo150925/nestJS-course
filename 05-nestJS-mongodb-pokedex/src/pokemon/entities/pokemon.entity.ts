import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Representacion de la colecction (tabla) en la DB de MongoDB
// Document le añade nombres, metodos, etc para trabajar de manera facil

@Schema()
export class Pokemon extends Document {
  @Prop({
    unique: true,
    id: true,
  })
  name: string;

  @Prop({
    unique: true,
    id: true,
  })
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
