import { BusController } from "./Buses.controller"
import { TestingModule, Test } from "@nestjs/testing";
import { BusesService } from "./Buses.service";
import { CreateBusesDto } from "./dtos/buses.dto";
import { BusResponse, BusesResponse } from "../interfaces/response";
import { getModelToken } from "@nestjs/sequelize";
import { Buses } from "./Buses.entity";
import { mockBusService } from "../../test/__mocks__/bus.mocks";
import { DriversService } from "../drivers/Drivers.service";
import { Drivers } from "../drivers/Drivers.entity";

const busRequest: CreateBusesDto = {
  number_plate: 'FJK24R',
  manufacturer: 'Nissan',
  year: '2008',
  model: 'Path searcher',
  owner_id: 2,
  capacity: 12
}

const busResponse: BusResponse = {
  success: true,
  data: { id: 2, ...busRequest }
}

const allBuses: BusesResponse = {
  success: true,
  data: [{ id: 2, ...busRequest }]
}

describe('BusController', () => {
  let busController: BusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers:[
        BusesService,
        DriversService,
        {
          provide: getModelToken(Buses),
          useValue: mockBusService
        },
        {
          provide: getModelToken(Drivers),
          useValue: mockBusService
        }
      ],
      // imports: [DriversModule],
      controllers: [BusController]
    }).compile();

    busController = module.get<BusController>(BusController)
  })

  describe('Create Bus', () => {
    it('should create new Bus instance', async () => {
      const response = await busController.create({ user: { id: 2 } }, busRequest);
      expect(response).toEqual(busResponse)
    })
  })

  describe('Get one bus', () => {
    it('should get one bus using its Id', async () => {
      const response = await busController.getBus({ id: 2 });
      expect(response).toEqual(busResponse)
    })
  })

  describe('Get buses', () => {
    it('should get list of buses', async () => {
      const response = await busController.getBuses();
      expect(response).toEqual(allBuses)
    })
  })
})