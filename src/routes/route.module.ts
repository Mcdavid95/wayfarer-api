import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Routes } from './Routes.entity';

@Module({
  imports: [SequelizeModule.forFeature([Routes])],
  exports: [SequelizeModule]
})
export class RoutesModule {}