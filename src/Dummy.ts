export interface Pizza {
  id: number;
  name: string;
  bakery: string;
  price: number;
}

export const pizzaz: Pizza[] = [
  {
    id: 1,
    name: 'Margherita',
    bakery: 'Dominos',
    price: 2500,
  },
  {
    id: 2,
    name: 'Pepperoni Feast',
    bakery: 'Pizza Hut',
    price: 3200,
  },
  {
    id: 3,
    name: 'BBQ Chicken',
    bakery: 'Debonairs',
    price: 3000,
  },
  {
    id: 4,
    name: 'Veggie Supreme',
    bakery: 'Cold Stone Pizza',
    price: 2800,
  },
  {
    id: 5,
    name: 'Hawaiian',
    bakery: 'Papa John’s',
    price: 3500,
  },
  {
    id: 6,
    name: 'Meat Lovers',
    bakery: 'Little Caesars',
    price: 3800,
  },
];
