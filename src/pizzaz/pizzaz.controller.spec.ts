import { Test, TestingModule } from '@nestjs/testing';
import { PizzazController } from './pizzaz.controller';

describe('PizzazController', () => {
  let pizzaController: PizzazController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PizzazController],
    }).compile();

    pizzaController = module.get<PizzazController>(PizzazController);
  });

  it('should be defined', () => {
    expect(pizzaController).toBeDefined();
  });
});
