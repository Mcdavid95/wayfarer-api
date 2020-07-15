import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UserHttpModule } from './modules/user-http.module';
import { BusHttpModule } from './modules/bus-http.module';
import { TripHttpModule } from './modules/trip-http.module';
import { BookingHttpModule } from './modules/booking-http.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'wayfarer_development',
      autoLoadModels: true,
      synchronize: true,
    }),
    ConfigModule.forRoot(),
    UserHttpModule,
    BusHttpModule,
    TripHttpModule,
    BookingHttpModule
  ],
})

export class AppModule {}
