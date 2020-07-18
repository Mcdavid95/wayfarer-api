import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Buses } from './Buses.entity';

@Module({
  imports: [SequelizeModule.forFeature([Buses])],
  exports: [SequelizeModule]
})
export class BusesModule {}