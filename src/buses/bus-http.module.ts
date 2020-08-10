import { Module } from '@nestjs/common';
import { BusesModule } from './bus.module';
import { BusesService } from './Buses.service';
import { BusController } from './Buses.controller';
import { DriversService } from 'src/drivers/Drivers.service';
import { DriversModule } from 'src/drivers/driver.module';

@Module({
  imports: [
    BusesModule, DriversModule
  ],
  providers: [BusesService, DriversService],
  controllers: [BusController],
  exports: [BusesService]
})
export class BusHttpModule {}
