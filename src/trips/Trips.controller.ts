import {
  Controller,
  Request,
  Post,
  Body,
  Param,
  Get,
  UseGuards,
  HttpException,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { TripsService } from './Trips.service';
import { CreateTripsDto } from './dtos/trips.dto';
import { TripResponse, TripsResponse } from '../interfaces/response';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BusesService } from '../buses/Buses.service';

@Controller()
export class TripController {
  constructor(private readonly tripService: TripsService, private readonly busService: BusesService) {}

  /**
   * @method create
   *
   */
  @UseGuards(JwtAuthGuard)
  @Post('trips')
  async create(
    @Request()
    @Body()
    { bus_id, trip_date, fare, route_id }: CreateTripsDto,
  ): Promise<TripResponse | HttpException> {
    try {
      const busExists = await this.busService.findById(bus_id);
      if (!busExists) {
        return new NotFoundException(`Bus with bus_id: ${bus_id} does not exist`)
      }
      const options = {
        where: { bus_id, trip_date },
      };
      const tripExist = await this.tripService.findOne(options);
      if (tripExist) {
        return new ConflictException('Trip with the same bus_id and time already exist');
      }
      const trip = await this.tripService.create({
        bus_id,
        trip_date,
        fare,
        route_id
      });
      return {
        success: true,
        data: trip,
      };
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('trips/:id')
  async getTrip(@Param() params: { id: number }): Promise<TripResponse | HttpException> {
    try {
      const trip = await this.tripService.findById(params.id);
      if (!trip) {
        return new NotFoundException('Trip not found');
      }
      return {
        success: true,
        data: trip,
      };
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('trips')
  async getTrips(): Promise<TripsResponse | HttpException> {
    try {
      const trips = await this.tripService.findAll({});
      return {
        success: true,
        data: trips,
      };
    } catch (error) {
      return new InternalServerErrorException();
    }
  }
}
