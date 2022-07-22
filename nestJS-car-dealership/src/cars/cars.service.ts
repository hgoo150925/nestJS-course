import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Kia',
      model: 'Soul',
    },
    {
      id: 2,
      brand: 'Fiat',
      model: 'Mobi',
    },
    {
      id: 3,
      brand: 'Peugeot',
      model: '3008 SUV',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id '${id} not found 😅​`);
    }
    return car;
  }
}
