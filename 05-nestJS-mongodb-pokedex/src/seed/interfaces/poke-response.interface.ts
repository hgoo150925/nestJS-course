// Es una interface porque solo queremos poner el type a esta respuesta
export interface PokeResponse {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
