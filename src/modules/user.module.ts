import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../models/user';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  exports: [SequelizeModule]
})
export class UsersModule {}