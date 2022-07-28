import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Kia',
    model: 'Soul',
  },
  {
    id: uuid(),
    brand: 'Fiat',
    model: 'Uno',
  },
];
