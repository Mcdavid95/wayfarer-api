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
import { DriversGuard } from 'src/common/guards/driverRole.guard';

@Controller()
export class DriverController {
  constructor(private readonly driverService: DriversService) {}

  /**
   * @method create
   *
   */
  @UseGuards(JwtAuthGuard)
  @Post('drivers')
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
      return {
        success: true,
        data: driver,
      };
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard, DriversGuard)
  @Get('drivers/:id')
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

  @UseGuards(JwtAuthGuard, DriversGuard)
  @Get('drivers')
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
