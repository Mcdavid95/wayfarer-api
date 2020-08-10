
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Trips } from './Trips.entity';
import { CreateTripsDto } from './dtos/trips.dto';


@Injectable()
export class TripsService {
  constructor(
    @InjectModel(Trips)
    private TripsModel: typeof Trips,
  ) {}

  /**
   * @method create
   * @param {CreateTripsDto} body 
   */
  async create (body: CreateTripsDto): Promise<Trips> {
    return this.TripsModel.create(body);
  }

  /**
   * @method findAll
   * @param options database query options
   */
  async findAll(options: unknown): Promise<Trips[]> {
    return this.TripsModel.findAll(options);
  }

  /**
   * @method findById
   * @param {number} id Trips id from Trips table
   */
  findById(id: number): Promise<Trips> {
    return this.TripsModel.findByPk(id);
  }

  /**
   * @method findOne
   * @param {number} id Trips id from Trips table
   */
  findOne(options: unknown): Promise<Trips> {
    return this.TripsModel.findOne(options);
  }

  /**
   * @method remove
   * @param {number} id Trips id from Trips table
   */
  async remove(id: number): Promise<void> {
    const trip = await this.findOne(id);
    await trip.destroy();
  }

  // async update(updateObject: any, options: any): Promise<Trips> {
  //   return await this.TripsModel.update(updateObject, options)
  // }
}