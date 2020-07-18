import { CreateBuses } from "src/dtos/buses.dto"

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
    const res = {
      number_plate: busObject.number_plate,
      manufacturer: busObject.manufacturer,
      year: busObject.year,
      model: busObject.model,
      capacity: busObject.capacity
    }
  }),
  create: jest.fn().mockImplementation((body: CreateBuses) => {
    return {
      id: 2,
      number_plate: body.number_plate,
      manufacturer: body.manufacturer,
      year: body.year,
      model: body.model,
      capacity: body.capacity
    }
  }),
  findAll: jest.fn().mockResolvedValue([
    {
      id: 2,
      number_plate: 'FJK24R',
      manufacturer: 'Nissan',
      year: '2008',
      model: 'Path searcher',
      capacity: 12
    }
  ])
}