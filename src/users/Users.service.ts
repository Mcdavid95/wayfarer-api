
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './Users.entity';
import { CreateUserDto } from './dtos/users.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users)
    private userModel: typeof Users,
  ) {}

  /**
   * @method create
   * @param {CreateUserDto} body 
   */
  async create (body: CreateUserDto): Promise<Users> {
    return this.userModel.create(body);
  }

  /**
   * @method findAll
   * @param options database query options
   */
  async findAll(options: unknown): Promise<Users[]> {
    return this.userModel.findAll(options);
  }

  /**
   * @method findById
   * @param {number} id user id from user table
   */
  findById(id: number): Promise<Users> {
    return this.userModel.findByPk(id);
  }

  /**
   * @method findOne
   * @param {number} id user id from user table
   */
  findOne(options: unknown): Promise<Users> {
    return this.userModel.findOne(options);
  }

  /**
   * @method remove
   * @param {number} id user id from user table
   */
  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}