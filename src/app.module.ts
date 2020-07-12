import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
// import { UsersModule } from './modules/user.module';
import { BusesModule } from './modules/bus.module';
import { BookingsModule } from './modules/booking.module';
import { TripsModule } from './modules/trip.module';
import { UserHttpModule } from './modules/user-http.module';

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
    BusesModule,
    TripsModule,
    BookingsModule
  ],
})

export class AppModule {}
