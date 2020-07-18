import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Trips } from './Trips.entity';

@Module({
  imports: [SequelizeModule.forFeature([Trips])],
  exports: [SequelizeModule]
})
export class TripsModule {}