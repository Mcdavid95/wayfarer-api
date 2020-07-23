
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Routes } from './Routes.entity';
import { CreateRoutesDto } from './dtos/routes.dto';


@Injectable()
export class RoutesService {
  constructor(
    @InjectModel(Routes)
    private RoutesModel: typeof Routes,
  ) {}

  /**
   * @method create
   * @param {CreateRoutesDto} body 
   */
  async create (body: CreateRoutesDto): Promise<Routes> {
    return this.RoutesModel.create(body);
  }

  /**
   * @method findAll
   * @param options database query options
   */
  async findAll(options: unknown): Promise<Routes[]> {
    return this.RoutesModel.findAll(options);
  }

  /**
   * @method findById
   * @param {number} id Routes id from Routes table
   */
  findById(id: number): Promise<Routes> {
    return this.RoutesModel.findByPk(id);
  }

  /**
   * @method findOne
   * @param {number} id Routes id from Routes table
   */
  findOne(options: unknown): Promise<Routes> {
    return this.RoutesModel.findOne(options);
  }

  /**
   * @method remove
   * @param {number} id Routes id from Routes table
   */
  async remove(id: number): Promise<void> {
    const Routes = await this.findOne(id);
    await Routes.destroy();
  }

  // async update(updateObject: any, options: any): Promise<Routes> {
  //   return await this.RoutesModel.update(updateObject, options)
  // }
}