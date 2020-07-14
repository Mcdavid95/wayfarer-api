import { Module } from '@nestjs/common';
import { TripsModule } from './trip.module';
import { TripsService } from 'src/services/Trips.service';
import { TripController } from 'src/controllers/Trips.controller';
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
