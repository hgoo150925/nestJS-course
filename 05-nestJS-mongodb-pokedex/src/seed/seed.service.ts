import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    // La respuesta es de tipo PokeResponse
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      // tomamos la ultima posicion del url
      const no = +segments[segments.length - 2];

      console.log({ name, no });

      // const pokemon = await this.pokemonModel.create({ name, no });
      //pokemonToInsert.push({ name, no }); // [{ name: bulbasaur, no: 1 }]
    });
    return data.results;
  }
}
