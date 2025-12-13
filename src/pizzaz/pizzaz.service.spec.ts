import { Test, TestingModule } from '@nestjs/testing';
import { PizzazService } from './pizzaz.service';

describe('PizzazService', () => {
  let service: PizzazService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PizzazService],
    }).compile();

    service = module.get<PizzazService>(PizzazService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
