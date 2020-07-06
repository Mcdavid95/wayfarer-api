import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/user.module';
import { BusesModule } from './modules/bus.module';
import { BookingsModule } from './modules/booking.module';
import { TripsModule } from './modules/trip.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'db',
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    BusesModule,
    TripsModule,
    BookingsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
