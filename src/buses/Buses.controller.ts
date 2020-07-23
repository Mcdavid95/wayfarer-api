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
import { BusesService } from './Buses.service';
import { CreateBusesDto } from './dtos/buses.dto';
import { handleException } from '../utils/errorResponse';
import { BusResponse, BusesResponse } from '../interfaces/response';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller()
export class BusController {
  constructor(private readonly busService: BusesService) {}

  /**
   * @method create
   *
   */
  @UseGuards(JwtAuthGuard)
  @Post('buses')
  async create(
    @Request() req,
    @Body()
    { number_plate, manufacturer, year, model, capacity }: CreateBusesDto,
  ): Promise<BusResponse | any> {
    try {
      const options = {
        where: { number_plate },
      };
      const busExist = await this.busService.findOne(options);
      if (busExist) {
        return handleException('CONFLICT', 'Bus with the same number_plate already exist');
      }
      const bus = await this.busService.create({
        owner_id: req.user.id,
        number_plate,
        manufacturer,
        year,
        model,
        capacity,
      });
      return {
        success: true,
        data: bus,
      };
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('buses/:id')
  async getBus(@Param() params: { id: number }): Promise<BusResponse | any> {
    try {
      const bus = await this.busService.findById(params.id);
      if (!bus) {
        return handleException('NOT_FOUND', 'Bus not found');
      }
      return {
        success: true,
        data: bus,
      };
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('buses')
  async getBuses(): Promise<BusesResponse> {
    try {
      const buses = await this.busService.findAll({});
      return {
        success: true,
        data: buses,
      };
    } catch (error) {
      return error;
    }
  }
}
