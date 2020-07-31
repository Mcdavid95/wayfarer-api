import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserHttpModule } from './users/user-http.module';
import { BusHttpModule } from './buses/bus-http.module';
import { TripHttpModule } from './trips/trip-http.module';
import { BookingHttpModule } from './bookings/booking-http.module';
import envConfig from './config/env.config';
import { DatabaseModule } from './database/database.module';
import { DriverHttpModule } from './drivers/driver-http.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig]
    }),
    DatabaseModule,
    UserHttpModule,
    BusHttpModule,
    TripHttpModule,
    BookingHttpModule,
    DriverHttpModule
  ],
})

export class AppModule {}
