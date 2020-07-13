import { Controller, Post, Request, Body, UseFilters } from "@nestjs/common";
import { BusesService } from "src/services/Buses.service";
import { CreateBuses } from "src/dtos/buses.dto";
import { GetBus } from "src/interfaces/bus.interface";
import { Exception, HttpExceptionFilter } from "src/utils/errorResponse";
import { BusResponse } from "src/interfaces/response";

@Controller()
@UseFilters( new HttpExceptionFilter())
export class BusController {
  constructor(private readonly busService: BusesService) {}

  /**
   * @method create
   * 
   */
  @Post('buses')
  async create(
    @Request()
    @Body()
    { number_plate, manufacturer, year, model, capacity }: CreateBuses
    ) : Promise<BusResponse> {
      try {
        const options = {
          where: { number_plate }
        }
        const busExist = await this.busService.findOne(options);
        if (busExist) {
          return new Promise((resolve, reject) => {
            reject(
              new Exception({
                status: 'CONFLICT',
                message: 'Bus with the same number_plate already exist'
              })
            )
          })
        };
        const bus = await this.busService.create({
          number_plate, manufacturer, year, model, capacity
        })
        return {
          success: true,
          data: bus
        }
      } catch (error) {
        return error
      }
    }
  
  async get
}