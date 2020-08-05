import { Module } from "@nestjs/common";
import { DriversModule } from "./driver.module";
import { DriversService } from "./Drivers.service";
import { DriverController } from "./driver.controller";
import { UsersService } from "src/users/Users.service";
import { UsersModule } from "src/users/user.module";

@Module({
  imports: [DriversModule, UsersModule],
  providers: [DriversService, UsersService],
  controllers: [DriverController],
  exports: [DriversService]
})
export class DriverHttpModule {}
