import { Module } from '@nestjs/common';
import { PizzazController } from './pizzaz.controller';
import { PizzazService } from './pizzaz.service';

@Module({
  imports: [],
  controllers: [PizzazController],
  providers: [PizzazService],
})
export class PizzazModule {}
