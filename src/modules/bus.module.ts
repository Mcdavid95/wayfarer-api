import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bus } from '../models/bus';

@Module({
  imports: [SequelizeModule.forFeature([Bus])],
  exports: [SequelizeModule]
})
export class BusesModule {}