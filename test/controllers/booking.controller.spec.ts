import { BookingController } from '../../src/controllers/Bookings.controller';
import { TestingModule, Test } from '@nestjs/testing';
import { TripsService } from '../../src/services/Trips.service';
import { CreateBookings } from '../../src/dtos/bookings.dto';
import {
  BookingResponse,
  BookingsResponse,
} from '../../src/interfaces/response';
import { getModelToken } from '@nestjs/sequelize';
import { Trips } from '../../src/models/Trips';
import { GetBooking } from 'src/interfaces/bookings.interface';
import { Bookings } from '../../src/models/Bookings';
import { mockBookingService, mockTripService } from '../__mocks__/booking.mocks';
import { BookingsService } from '../../src/services/Bookings.service';

const bookingRequest: CreateBookings = {
  trip_id: 2,
  seat_number: 3,
};

const bookingResponse: BookingResponse = {
  success: true,
  data: { id: 2, user_id: 2, ...bookingRequest },
};

const allBookings: BookingsResponse = {
  success: true,
  data: [{ id: 2, user_id: 2, ...bookingRequest }],
};

describe('BusController', () => {
  let bookingController: BookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TripsService,
        BookingsService,
        {
          provide: getModelToken(Trips),
          useValue: mockTripService,
        },
        {
          provide: getModelToken(Bookings),
          useValue: mockBookingService,
        },
      ],
      controllers: [BookingController],
    }).compile();

    bookingController = module.get<BookingController>(BookingController);
  });

  describe('Create Booking', () => {
    it('should create new Booking instance', async () => {
      const response = await bookingController.create(
        { user: { id: 1 } },
        bookingRequest,
      );
      expect(response).toEqual(bookingResponse);
    });
  });

  describe('Get one booking', () => {
    it('should get one booking using its Id', async () => {
      const response = await bookingController.getBooking({ id: 2 });
      expect(response).toEqual(bookingResponse);
    });
  });

  describe('Get bookings', () => {
    it('should get list of bookings', async () => {
      const response = await bookingController.getBookings();
      expect(response).toEqual(allBookings);
    });
  });
});
