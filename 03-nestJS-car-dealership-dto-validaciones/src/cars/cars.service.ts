import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

// import { CreateCarDto } from './dto/create-car.dto';
// import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Kia',
      model: 'Soul',
    },
    {
      id: uuid(),
      brand: 'Fiat',
      model: 'Mobi',
    },
    {
      id: uuid(),
      brand: 'Peugeot',
      model: '3008 SUV',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id '${id}' not found 😅​`);
    }
    return car;
  }

  // Crea un nuevo auto
  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      brand: createCarDto.brand,
      model: createCarDto.model,
      // ...createCarDto
    };
    this.cars.push(car);
    return car;
  }

  // Actualiza un auto
  update(id: string, updateCarDto: UpdateCarDto) {}
}
