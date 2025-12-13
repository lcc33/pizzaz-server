import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzazModule } from './pizzaz/pizzaz.module';

@Module({
  imports: [PizzazModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
