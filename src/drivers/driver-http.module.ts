import { Module } from "@nestjs/common";
import { DriversModule } from "./driver.module";
import { DriversService } from "./Drivers.service";
import { DriverController } from "./driver.controller";

@Module({
  imports: [DriversModule],
  providers: [DriversService],
  controllers: [DriverController],
  exports: [DriversService]
})
export class DriverHttpModule {}
