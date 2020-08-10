/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Controller,
  Request,
  Post,
  Body,
  Param,
  Get,
  UseGuards,
  UseFilters,
  ConflictException,
  HttpException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { BusesService } from './Buses.service';
import { CreateBusesDto } from './dtos/buses.dto';
import { HttpExceptionFilter } from '../utils/errorResponse';
import { BusResponse, BusesResponse } from '../interfaces/response';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../common/guards/role.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('buses')
@UseGuards(JwtAuthGuard, RolesGuard)
@UseFilters(new HttpExceptionFilter())
export class BusController {
  constructor(private readonly busService: BusesService) {}

  /**
   * @method create
   *
   */
  @Post()
  @Roles('DRIVER')
  async create(
    @Request() req,
    @Body()
    { number_plate, manufacturer, year, model, capacity }: CreateBusesDto,
  ): Promise<BusResponse | HttpException> {
    try {
      const options = {
        where: { number_plate },
      };
      const busExist = await this.busService.findOne(options);
      if (busExist) {
        return new ConflictException('Bus with the same number_plate already exist');
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
      return new InternalServerErrorException();
    }
  }

  @Get(':id')
  async getBus(@Param() params: { id: number }): Promise<BusResponse | HttpException> {
    try {
      const bus = await this.busService.findById(params.id);
      if (!bus) {
        return new NotFoundException('Bus not found');
      }
      return {
        success: true,
        data: bus,
      };
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  @Get()
  async getBuses(): Promise<BusesResponse | HttpException> {
    try {
      const buses = await this.busService.findAll({});
      return {
        success: true,
        data: buses,
      };
    } catch (error) {
      return new InternalServerErrorException();
    }
  }
}
