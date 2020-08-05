
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bookings } from './Bookings.entity';
import { Trips } from '../trips/Trips.entity';
import { Users } from '../users/Users.entity';
import { GetBooking } from 'src/bookings/bookings.interface';
import { TripsService } from '../trips/Trips.service';


@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(Bookings)
    private BookingsModel: typeof Bookings,
    private readonly tripService: TripsService
  ) {}

  /**
   * @method create
   * @param {CreateBookingsDto} body 
   */
  async create (body: GetBooking): Promise<Bookings> {
    return this.BookingsModel.create(body);
  }

  /**
   * @method findAll
   * @param options database query options
   */
  async findAll(options: unknown): Promise<Bookings[]> {
    return this.BookingsModel.findAll(options);
  }

  /**
   * @method findById
   * @param {number} id Bookings id from Bookings table
   */
  findById(id: number): Promise<Bookings> {
    return this.BookingsModel.findByPk(id, {
      include: [
        {
          model: Trips,
          as: 'trip',
          attributes: {
            exclude: ['seats']
          }
        },
        {
          model: Users,
          as: 'user',
          attributes: {
            exclude: ['password']
          }
        }
      ]
    });
  }

  /**
   * @method findOne
   * @param {number} id Bookings id from Bookings table
   */
  findOne(options: unknown): Promise<Bookings> {
    return this.BookingsModel.findOne(options);
  }

  /**
   * @method remove
   * @param {number} id Bookings id from Bookings table
   */
  async remove(id: number): Promise<void> {
    const booking = await this.findOne(id);
    await booking.destroy();
  }

//   /**
//    * 
//    * @param tripId trip id
//    * @param seatNumber seat number
//    */
//   async checkSeatAvailability(tripId: number, seatNumber: number): Promise<CheckSeatAvailability> {
//     const trip = await this.tripService.findById(tripId);
//     const checkSeat = trip.seats.filter(seat => seat.number == seatNumber)
//     const availableSeat = trip.seats.filter(seat => seat.is_taken === false)
//     if (checkSeat[0].is_taken) {
//       return {
//         status: false,
//         seats: availableSeat
//       }
//     }
//     return {
//       status: true,
//       seats: checkSeat
//     }
//   }

//   async reserveSeat(tripId: number, seatNumber: number): Promise<void> {
//     const trip = await this.tripService.findById(tripId);
//     const updatedSeats = trip.seats.map((seat) => {
//       if(seat.number == seatNumber) {
//         seat.is_taken = true;
//       }
//       return seat
//     })
//     trip.seats = updatedSeats
//     await trip.save();
//   }
}