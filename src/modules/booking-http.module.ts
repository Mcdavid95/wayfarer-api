import { Module } from '@nestjs/common';
import { BookingsModule } from './booking.module';
import { BookingsService } from 'src/services/Bookings.service';
import { BookingController } from 'src/controllers/Bookings.controller';
import { TripHttpModule } from './trip-http.module';
import { UserHttpModule } from './user-http.module';
import { TripsModule } from './trip.module';
import { UsersModule } from './user.module';

@Module({
  imports: [
    BookingsModule, TripsModule, UsersModule, TripHttpModule, UserHttpModule
  ],
  providers: [BookingsService],
  controllers: [BookingController],
  exports: [BookingsService]
})
export class BookingHttpModule {}
