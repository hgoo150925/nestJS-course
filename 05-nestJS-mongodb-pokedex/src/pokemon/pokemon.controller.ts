import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  @Get(':pokemonId')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('pokemonId') pokemonId: string) {
    return this.pokemonService.findOne(pokemonId);
  }

  @Patch(':pokemonId')
  update(
    @Param('pokemonId') pokemonId: string,
    @Body() updatePokemonDto: UpdatePokemonDto,
  ) {
    return this.pokemonService.update(pokemonId, updatePokemonDto);
  }

  @Delete(':pokemonId')
  remove(@Param('pokemonId') pokemonId: string) {
    return this.pokemonService.remove(pokemonId);
  }
}
