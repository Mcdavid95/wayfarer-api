/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Controller,
  Request,
  Post,
  Body,
  Param,
  Get,
  UseGuards,
} from '@nestjs/common';
import { DriversService } from './Drivers.service';
import { CreateDriversDto } from './dtos/drivers.dto';
import { handleException } from '../utils/errorResponse';
import { DriverResponse, DriversResponse } from '../interfaces/response';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../common/guards/role.guard';
import { UsersService } from '../users/Users.service';

@Controller('drivers')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DriverController {
  constructor(
    private readonly driverService: DriversService,
    private readonly userService: UsersService
  ) {}

  /**
   * @method create
   *
   */
  @Post()
  async create(
    @Request() req,
    @Body()
    { user_id, credentials }: CreateDriversDto,
  ): Promise<DriverResponse | any> {
    try {
      const options = {
        where: { user_id: user_id || req.user.id },
      };
      const driverExist = await this.driverService.findOne(options);
      if (driverExist) {
        return handleException('CONFLICT', 'Driver already exists');
      }
      const driver = await this.driverService.create({
        user_id: user_id || req.user.id,
        credentials,
      });
      const user = await this.userService.findById(user_id || req.user.id);
      user.roles = [...new Set([...user.roles, 'DRIVER'])]
      await user.save()
      return {
        success: true,
        data: driver,
      };
    } catch (error) {
      return error;
    }
  }
  @Get(':id')
  async getDriver(@Param() params: { id: number }): Promise<DriverResponse | any> {
    try {
      const driver = await this.driverService.findById(params.id);
      if (!driver) {
        return handleException('NOT_FOUND', 'Driver not found');
      }
      return {
        success: true,
        data: driver,
      };
    } catch (error) {
      return error;
    }
  }
  @Get()
  async getDrivers(): Promise<DriversResponse> {
    try {
      const drivers = await this.driverService.findAll({});
      return {
        success: true,
        data: drivers,
      };
    } catch (error) {
      return error;
    }
  }
}
