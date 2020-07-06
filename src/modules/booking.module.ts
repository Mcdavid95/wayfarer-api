import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bookings } from '../models/Bookings';

@Module({
  imports: [SequelizeModule.forFeature([Bookings])],
  exports: [SequelizeModule]
})
export class BookingsModule {}