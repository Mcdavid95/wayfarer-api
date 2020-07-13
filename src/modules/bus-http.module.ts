import { Module } from '@nestjs/common';
import { BusesModule } from './bus.module';
import { BusesService } from 'src/services/Buses.service';
import { BusController } from 'src/controllers/Buses.controller';

@Module({
  imports: [
    BusesModule,
  ],
  providers: [BusesService],
  controllers: [BusController],
  exports: [BusesService]
})
export class BusHttpModule {}
