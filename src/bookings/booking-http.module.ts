import { Module } from '@nestjs/common';
import { BookingsModule } from './booking.module';
import { BookingsService } from './Bookings.service';
import { BookingController } from 'src/bookings/Bookings.controller';
import { TripHttpModule } from '../trips/trip-http.module';
import { UserHttpModule } from '../users/user-http.module';
import { TripsModule } from '../trips/trip.module';
import { UsersModule } from '../users/user.module';

@Module({
  imports: [
    BookingsModule, TripsModule, UsersModule, TripHttpModule, UserHttpModule
  ],
  providers: [BookingsService],
  controllers: [BookingController],
  exports: [BookingsService]
})
export class BookingHttpModule {}
