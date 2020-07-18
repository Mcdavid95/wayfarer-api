import { Module } from '@nestjs/common';
import { BusesModule } from './bus.module';
import { BusesService } from './Buses.service';
import { BusController } from './Buses.controller';

@Module({
  imports: [
    BusesModule,
  ],
  providers: [BusesService],
  controllers: [BusController],
  exports: [BusesService]
})
export class BusHttpModule {}
