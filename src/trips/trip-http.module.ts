import { Module } from '@nestjs/common';
import { TripsModule } from './trip.module';
import { TripsService } from './Trips.service';
import { TripController } from './Trips.controller';
import { BusHttpModule } from '../buses/bus-http.module';

@Module({
  imports: [
    TripsModule, BusHttpModule
  ],
  providers: [TripsService],
  controllers: [TripController],
  exports: [TripsService]
})
export class TripHttpModule {}
