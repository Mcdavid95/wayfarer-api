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
import { BookingsService } from './Bookings.service';
import { CreateBookingsDto } from './dtos/bookings.dto';
import { handleException } from '../utils/errorResponse';
import { BookingResponse, BookingsResponse } from '../interfaces/response';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TripsService } from '../trips/Trips.service';

@Controller()
export class BookingController {
  constructor(
    private readonly bookingService: BookingsService,
    private readonly tripService: TripsService,
  ) {}

  /**
   * @method create
   *
   */
  @UseGuards(JwtAuthGuard)
  @Post('bookings')
  async create(
    @Request() req,
    @Body()
    { trip_id }: CreateBookingsDto,
  ): Promise<BookingResponse | any> {
    try {
      const tripExists = await this.tripService.findById(trip_id);
      if (!tripExists) {
        return handleException(
          'NOT_FOUND',
          `Trip with trip_id: ${trip_id} does not exist`,
        );
      }
      // const seatAvailable = await this.bookingService.checkSeatAvailability(
      //   trip_id,
      //   seat_number,
      // );
      // if (!seatAvailable.status) {
      //   const availableSeats = seatAvailable.seats.map(seat => seat.number)
      //   return handleException('BAD_REQUEST', `Seat number ${seat_number} is currently not available. Select from the following available seats. ${availableSeats}`)
      // }
      const booking = await this.bookingService.create({
        trip_id,
        user_id: req.user.id,
        // seat_number,
      });
      // await this.bookingService.reserveSeat(trip_id, seat_number)
      return {
        success: true,
        data: booking,
      };
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('bookings/:id')
  async getBooking(
    @Param() params: { id: number },
  ): Promise<BookingResponse | any> {
    try {
      const booking = await this.bookingService.findById(params.id);
      if (!booking) {
        return handleException('NOT_FOUND', 'Booking not found');
      }
      return {
        success: true,
        data: booking,
      };
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('bookings')
  async getBookings(): Promise<BookingsResponse> {
    try {
      const bookings = await this.bookingService.findAll({});
      return {
        success: true,
        data: bookings,
      };
    } catch (error) {
      return error;
    }
  }
}
