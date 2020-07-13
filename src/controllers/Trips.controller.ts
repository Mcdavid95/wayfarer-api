import {
  Controller,
  Request,
  Post,
  Body,
  Param,
  Get,
  UseGuards,
} from '@nestjs/common';
import { TripsService } from 'src/services/Trips.service';
import { CreateTrips } from 'src/dtos/trips.dto';
import { handleException } from 'src/utils/errorResponse';
import { TripResponse, TripsResponse } from 'src/interfaces/response';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller()
export class TripController {
  constructor(private readonly tripService: TripsService) {}

  /**
   * @method create
   *
   */
  @UseGuards(JwtAuthGuard)
  @Post('trips')
  async create(
    @Request()
    @Body()
    { bus_id, origin, destination, trip_date, status, fare, seats }: CreateTrips,
  ): Promise<TripResponse | any> {
    try {
      const options = {
        where: { bus_id, trip_date },
      };
      const tripExist = await this.tripService.findOne(options);
      if (tripExist) {
        return handleException('CONFLICT', 'Trip with the same bus_id and time already exist');
      }
      const trip = await this.tripService.create({
        bus_id,
        origin,
        destination,
        trip_date,
        status,
        fare,
        seats
      });
      return {
        success: true,
        data: trip,
      };
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('trips/:id')
  async getTrip(@Param() params: { id: number }): Promise<TripResponse | any> {
    try {
      const trip = await this.tripService.findById(params.id);
      if (!trip) {
        return handleException('NOT_FOUND', 'Trip not found');
      }
      return {
        success: true,
        data: trip,
      };
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('trips')
  async getTrips(): Promise<TripsResponse> {
    try {
      const trips = await this.tripService.findAll({});
      return {
        success: true,
        data: trips,
      };
    } catch (error) {
      return error;
    }
  }
}
