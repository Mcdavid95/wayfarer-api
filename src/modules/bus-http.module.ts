import { Module } from '@nestjs/common';
import { BusesModule } from './bus.module';
import { BusesService } from '../services/Buses.service';
import { BusController } from '../controllers/Buses.controller';

@Module({
  imports: [
    BusesModule,
  ],
  providers: [BusesService],
  controllers: [BusController],
  exports: [BusesService]
})
export class BusHttpModule {}
