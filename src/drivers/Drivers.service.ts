
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Drivers } from './Drivers.entity';
import { CreateDriversDto } from './dtos/drivers.dto';


@Injectable()
export class DriversService {
  constructor(
    @InjectModel(Drivers)
    private DriversModel: typeof Drivers,
  ) {}

  /**
   * @method create
   * @param {CreateDriversDto} body 
   */
  async create (body: CreateDriversDto): Promise<Drivers> {
    return this.DriversModel.create(body);
  }

  /**
   * @method findAll
   * @param options database query options
   */
  async findAll(options: unknown): Promise<Drivers[]> {
    return this.DriversModel.findAll(options);
  }

  /**
   * @method findById
   * @param {number} id Drivers id from Drivers table
   */
  findById(id: number): Promise<Drivers> {
    return this.DriversModel.findByPk(id);
  }

  /**
   * @method findOne
   * @param {number} id Drivers id from Drivers table
   */
  findOne(options: unknown): Promise<Drivers> {
    return this.DriversModel.findOne(options);
  }

  /**
   * @method remove
   * @param {number} id Drivers id from Drivers table
   */
  async remove(id: number): Promise<void> {
    const Drivers = await this.findOne(id);
    await Drivers.destroy();
  }
}