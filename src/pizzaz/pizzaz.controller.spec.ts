import { Test, TestingModule } from '@nestjs/testing';
import { PizzazController } from './pizzaz.controller';

describe('PizzazController', () => {
  let controller: PizzazController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PizzazController],
    }).compile();

    controller = module.get<PizzazController>(PizzazController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
