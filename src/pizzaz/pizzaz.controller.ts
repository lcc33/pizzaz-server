import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { PizzazService } from './pizzaz.service';
import type { Pizza } from 'src/Dummy';

@Controller('/api/pizzaz')
export class PizzazController {
  constructor(private readonly appService: PizzazService) {}

  @Get()
  getAllPizza(): Pizza[] {
    return this.appService.getAllPizzaz();
  }

  @Get('/:id')
  getSinglePizza(@Param('id') id: number): Pizza | undefined {
    const pizzaId = +id;
    return this.appService.getSinglePizza(pizzaId);
  }

  @Post('/addpizza')
  addPizza(@Body() pizza: Partial<Pizza>): Pizza | undefined {
    const pizzaData = pizza;
    if (!pizza || !pizza.name || !pizza.bakery || pizza.price === undefined) {
      throw new BadRequestException(
        'Missing required fields: name, bakery, price',
      );
    }
    return this.appService.addPizza(pizzaData);
  }
}
