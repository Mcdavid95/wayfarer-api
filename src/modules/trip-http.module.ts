import { Module } from '@nestjs/common';
import { TripsModule } from './trip.module';
import { TripsService } from '../services/Trips.service';
import { TripController } from '../controllers/Trips.controller';
import { BusHttpModule } from './bus-http.module';

@Module({
  imports: [
    TripsModule, BusHttpModule
  ],
  providers: [TripsService],
  controllers: [TripController],
  exports: [TripsService]
})
export class TripHttpModule {}
