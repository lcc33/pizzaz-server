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

  create(pizza: Partial<Pizza>): Pizza {
    const newId = pizzaz.length ? pizzaz[pizzaz.length - 1].id + 1 : 1;

    const newPizza: Pizza = {
      id: newId,
      name: pizza.name ?? '',
      bakery: pizza.bakery ?? '',
      price: pizza.price ?? 0,
    };
    pizzaz.push(newPizza);
    return newPizza;
  }
  update(pizzaId: number, pizza: Partial<Pizza>): Pizza | undefined {
    const existingPizzaIndex = pizzaz.findIndex((p) => p.id === pizzaId);
    if (existingPizzaIndex === -1) {
      return undefined;
    }

    const updatedPizza: Pizza = {
      id: pizzaId,
      name: pizza.name ?? pizzaz[existingPizzaIndex].name,
      bakery: pizza.bakery ?? pizzaz[existingPizzaIndex].bakery,
      price: pizza.price ?? pizzaz[existingPizzaIndex].price,
    };

    pizzaz[existingPizzaIndex] = updatedPizza;
    return updatedPizza;
  }

  delete(pizzaId: number): Pizza[] {
    pizzaz.splice(pizzaId - 1, 1);
    return pizzaz;
  }
}
