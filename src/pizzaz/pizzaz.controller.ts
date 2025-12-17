import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common';
import { PizzazService } from './pizzaz.service';
import type { Pizza } from 'src/Dummy';

@Controller('/api/pizzaz')
export class PizzazController {
  constructor(private readonly pizzaService: PizzazService) {}

  @Get()
  getAllPizza(): Pizza[] {
    return this.pizzaService.getAllPizzaz();
  }

  @Get('/:id')
  getSinglePizza(@Param('id') id: number): Pizza | undefined {
    const pizzaId = +id;
    return this.pizzaService.getSinglePizza(pizzaId);
  }

  @Post('')
  addPizza(@Body() pizza: Partial<Pizza>): Pizza | undefined {
    if (!pizza || !pizza.name || !pizza.bakery || pizza.price === undefined) {
      throw new BadRequestException(
        'Missing required fields: name, bakery, price',
      );
    }
    return this.pizzaService.create(pizza);
  }
  @Put('/:id')
  updatePizza(
    @Param('id') id: number,
    @Body() pizza: Partial<Pizza>,
  ): Pizza | undefined {
    const pizzaId = +id;
    if (!pizza || !pizza.name || !pizza.bakery || pizza.price === undefined) {
      throw new BadRequestException(
        'Missing required fields: name, bakery, price',
      );
    }
    return this.pizzaService.update(pizzaId, pizza);
  }
  @Delete('/:id')
  deletePizza(@Param('id') id: number): Pizza[] | undefined {
    const pizzaId = +id;
    return this.pizzaService.delete(pizzaId);
  }
}
