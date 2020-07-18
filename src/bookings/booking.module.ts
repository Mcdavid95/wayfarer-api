import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bookings } from './Bookings.entity';

@Module({
  imports: [SequelizeModule.forFeature([Bookings])],
  exports: [SequelizeModule]
})
export class BookingsModule {}