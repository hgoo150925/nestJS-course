import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { patch } from 'superagent';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  // Injeccion de dependencia
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return body;
  }

  @Patch()
  updateCar(@Body() body: any) {
    return body;
  }
}
