import { Injectable } from '@nestjs/common';
import { Pizza, pizzaz } from '../Dummy';

@Injectable()
export class PizzazService {
  getAllPizzaz(): Pizza[] {
    return pizzaz;
  }

  getSinglePizza(pizzaId: number): Pizza | undefined {
    return pizzaz.find((pizza) => pizza.id === pizzaId);
  }

  addPizza(pizza: Partial<Pizza>): Pizza {
    const newId = pizzaz[pizzaz.length - 1].id + 1;

    const newPizza: Pizza = {
      id: newId,
      name: pizza.name ?? '',
      bakery: pizza.bakery ?? '',
      price: pizza.price ?? 0,
    };

    pizzaz.push(newPizza);

    return newPizza;
  }
}
