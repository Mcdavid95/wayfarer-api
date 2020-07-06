import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Buses } from '../models/Buses';

@Module({
  imports: [SequelizeModule.forFeature([Buses])],
  exports: [SequelizeModule]
})
export class BusesModule {}