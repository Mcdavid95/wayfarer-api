import { TripController } from "./Trips.controller"
import { TestingModule, Test } from "@nestjs/testing";
import { BusesService } from "../buses/Buses.service";
import { CreateTripsDto } from "./dtos/trips.dto";
import { TripResponse, TripsResponse } from "../interfaces/response";
import { getModelToken } from "@nestjs/sequelize";
import { Buses } from "../buses/Buses.entity";
import { Trips } from "./Trips.entity";
import { mockTripService, mockBusService } from "../../test/__mocks__/trip.mocks";
import { TripsService } from "./Trips.service";

const tripRequest: CreateTripsDto = {
  bus_id: 2,
  trip_date: new Date('2018-05-23T18:25:43.511Z').toDateString(),
  fare: 150,
  route_id: 3
}

const tripResponse: TripResponse = {
  success: true,
  data: { id: 2, ...tripRequest }
}

const allTrips: TripsResponse = {
  success: true,
  data: [{ id: 2, ...tripRequest }]
}

describe('TripController', () => {
  let tripController: TripController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers:[
        BusesService,
        TripsService,
        {
          provide: getModelToken(Buses),
          useValue: mockBusService
        },
        {
          provide: getModelToken(Trips),
          useValue: mockTripService
        }
      ],
      controllers: [TripController]
    }).compile();

    tripController = module.get<TripController>(TripController)
  })

  describe('Create Trip', () => {
    it('should create new Trip instance', async () => {
      const response = await tripController.create(tripRequest);
      expect(response).toEqual(tripResponse)
    })
  })

  describe('Get one trip', () => {
    it('should get one trip using its Id', async () => {
      const response = await tripController.getTrip({ id: 2 });
      expect(response).toEqual(tripResponse)
    })
  })

  describe('Get tripes', () => {
    it('should get list of tripes', async () => {
      const response = await tripController.getTrips();
      expect(response).toEqual(allTrips)
    })
  })
})