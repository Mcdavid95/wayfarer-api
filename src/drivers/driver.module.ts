import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Drivers } from "./Drivers.entity";

@Module({
  imports: [SequelizeModule.forFeature([Drivers])],
  exports: [SequelizeModule]
})
export class DriversModule {}