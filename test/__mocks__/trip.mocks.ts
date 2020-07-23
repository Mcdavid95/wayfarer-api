/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreateTripsDto } from "../../src/trips/dtos/trips.dto"
import { CreateBusesDto } from "src/buses/dtos/buses.dto"

export const mockTripService = {
  findById: jest.fn().mockImplementation((id: number) => {
    return {
      id,
      bus_id: 2,
      route_id: 3,
      trip_date: new Date('2018-05-23T18:25:43.511Z').toDateString(),
      fare: 150,
    }
  }),
  findByPk: jest.fn().mockImplementation((id: number) => {
    return {
      id,
      bus_id: 2,
      route_id: 3,
      trip_date: new Date('2018-05-23T18:25:43.511Z').toDateString(),
      fare: 150,
    }
  }),
  findOne: jest.fn().mockImplementation((tripObject: CreateTripsDto) => {
    const res =  {
      bus_id: tripObject.bus_id,
      trip_date: tripObject.trip_date,
      fare: tripObject.fare,
      route_id: tripObject.route_id
    }
  }),
  create: jest.fn().mockImplementation((body: CreateTripsDto) => {
    return {
      id: 2,
      bus_id: body.bus_id,
      trip_date: body.trip_date,
      fare: body.fare,
      route_id: body.route_id
    }
  }),
  findAll: jest.fn().mockResolvedValue([
    {
      id: 2,
      bus_id: 2,
      route_id: 3,
      trip_date: new Date('2018-05-23T18:25:43.511Z').toDateString(),
      fare: 150,
    }
  ])
}

export const mockBusService = {
  findById: jest.fn().mockImplementation((id: number) => {
    return {
      id,
      owner_id: 2,
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
      owner_id: 2,
      number_plate: 'FJK24R',
      manufacturer: 'Nissan',
      year: '2008',
      model: 'Path searcher',
      capacity: 12
    }
  }),
  findOne: jest.fn().mockImplementation((busObject: CreateBusesDto) => {
    return false
  }),
}