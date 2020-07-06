import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Trip } from '../models/trip';

@Module({
  imports: [SequelizeModule.forFeature([Trip])],
  exports: [SequelizeModule]
})
export class TripsModule {}