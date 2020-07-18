import { CreateTrips } from "../../src/dtos/trips.dto"
import { CreateBuses } from "../../src/dtos/buses.dto"

export const mockBookingService = {
  findById: jest.fn().mockImplementation((id: number) => {
    return {
      id,
      trip_id: 2,
      seat_number: 3,
    }
  }),
  findByPk: jest.fn().mockImplementation((id: number) => {
    return {
      id,
      user_id: 2,
      trip_id: 2,
      seat_number: 3,
    }
  }),
  findOne: jest.fn().mockImplementation((tripObject: CreateTrips) => {
    const res =  {
      trip_id: 2,
      seat_number: 3,
    }
  }),
  create: jest.fn().mockImplementation((body: CreateTrips) => {
    return {
      id: 2,
      user_id: 2,
      trip_id: 2,
      seat_number: 3,
    }
  }),
  findAll: jest.fn().mockResolvedValue([
    {
      id: 2,
      user_id: 2,
      trip_id: 2,
      seat_number: 3,
    }
  ]),
  trip: {
    save: jest.fn()
  },
  reserveSeat: jest.fn().mockImplementation((trip_id, seat_number) => {
    return {
      trip_id,
      seat_number,
    }
  })
}

export const mockTripService = {
  findById: jest.fn().mockImplementation((id: number) => {
    return {
      id,
      number_plate: 'FJK24R',
      manufacturer: 'Nissan',
      year: '2008',
      model: 'Path searcher',
      capacity: 12
    }
  }),
  findByPk: jest.fn().mockImplementation((id: number) => {
    return {
      id: 2,
      bus_id: 2,
      origin: 'Ikeja Along',
      destination: 'Shomolu',
      trip_date: new Date('2018-05-23T18:25:43.511Z').toDateString(),
      status: 'active',
      fare: 150,
      seats: [{
        number: 3,
        is_taken: false
      }],
      save: jest.fn()
    }
  }),
  findOne: jest.fn().mockImplementation((busObject: CreateBuses) => {
    return false
  }),
}