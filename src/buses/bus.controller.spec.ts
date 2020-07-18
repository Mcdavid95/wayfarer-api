import { BusController } from "./Buses.controller"
import { TestingModule, Test } from "@nestjs/testing";
import { BusesService } from "./Buses.service";
import { CreateBuses } from "./buses.dto";
import { BusResponse, BusesResponse } from "../interfaces/response";
import { getModelToken } from "@nestjs/sequelize";
import { Buses } from "./Buses.entity";
import { mockBusService } from "../../test/__mocks__/bus.mocks";

const busRequest: CreateBuses = {
  number_plate: 'FJK24R',
  manufacturer: 'Nissan',
  year: '2008',
  model: 'Path searcher',
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
        {
          provide: getModelToken(Buses),
          useValue: mockBusService
        }
      ],
      controllers: [BusController]
    }).compile();

    busController = module.get<BusController>(BusController)
  })

  describe('Create Bus', () => {
    it('should create new Bus instance', async () => {
      const response = await busController.create(busRequest);
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