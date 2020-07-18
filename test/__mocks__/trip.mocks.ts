import { CreateTrips } from "../../src/dtos/trips.dto"
import { CreateBuses } from "src/dtos/buses.dto"

export const mockTripService = {
  findById: jest.fn().mockImplementation((id: number) => {
    return {
      id,
      bus_id: 2,
      origin: 'Ikeja Along',
      destination: 'Shomolu',
      trip_date: new Date('2018-05-23T18:25:43.511Z').toDateString(),
      status: 'active',
      fare: 150,
      seats: [{
        number: 3,
        is_taken: false
      }]
    }
  }),
  findByPk: jest.fn().mockImplementation((id: number) => {
    return {
      id,
      bus_id: 2,
      origin: 'Ikeja Along',
      destination: 'Shomolu',
      trip_date: new Date('2018-05-23T18:25:43.511Z').toDateString(),
      status: 'active',
      fare: 150,
      seats: [{
        number: 3,
        is_taken: false
      }]
    }
  }),
  findOne: jest.fn().mockImplementation((tripObject: CreateTrips) => {
    const res =  {
      bus_id: tripObject.bus_id,
      origin: tripObject.origin,
      destination: tripObject.destination,
      trip_date: tripObject.trip_date,
      status: tripObject.status,
      fare: tripObject.fare,
      seats: tripObject.seats
    }
  }),
  create: jest.fn().mockImplementation((body: CreateTrips) => {
    return {
      id: 2,
      bus_id: body.bus_id,
      origin: body.origin,
      destination: body.destination,
      trip_date: body.trip_date,
      status: body.status,
      fare: body.fare,
      seats: body.seats
    }
  }),
  findAll: jest.fn().mockResolvedValue([
    {
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
      }]
    }
  ])
}

export const mockBusService = {
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
      id,
      number_plate: 'FJK24R',
      manufacturer: 'Nissan',
      year: '2008',
      model: 'Path searcher',
      capacity: 12
    }
  }),
  findOne: jest.fn().mockImplementation((busObject: CreateBuses) => {
    return false
  }),
}