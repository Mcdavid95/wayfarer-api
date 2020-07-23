
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Buses } from './Buses.entity';
import { CreateBusesDto } from './dtos/buses.dto';


@Injectable()
export class BusesService {
  constructor(
    @InjectModel(Buses)
    private BusesModel: typeof Buses,
  ) {}

  /**
   * @method create
   * @param {CreateBusesDto} body 
   */
  async create (body: CreateBusesDto): Promise<Buses> {
    return this.BusesModel.create(body);
  }

  /**
   * @method findAll
   * @param options database query options
   */
  async findAll(options: unknown): Promise<Buses[]> {
    return this.BusesModel.findAll(options);
  }

  /**
   * @method findById
   * @param {number} id Buses id from Buses table
   */
  findById(id: number): Promise<Buses> {
    return this.BusesModel.findByPk(id);
  }

  /**
   * @method findOne
   * @param {number} id Buses id from Buses table
   */
  findOne(options: unknown): Promise<Buses> {
    return this.BusesModel.findOne(options);
  }

  /**
   * @method remove
   * @param {number} id Buses id from Buses table
   */
  async remove(id: number): Promise<void> {
    const Buses = await this.findOne(id);
    await Buses.destroy();
  }
}