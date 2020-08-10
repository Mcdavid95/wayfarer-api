/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Request, Post, Body, UseFilters, UseGuards, Get, ConflictException, HttpException, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dtos/users.dto';
import { UserResponse, LoginResponse } from '../interfaces/response';
import { AuthService } from '../auth/Auth.service';
import { UsersService } from './Users.service';
import { HttpExceptionFilter } from '../utils/errorResponse';
import { AuthGuard } from '@nestjs/passport';
import { Op } from 'sequelize';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller()
@UseFilters(new HttpExceptionFilter())
export class UserController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('auth/register')
  async register(
    @Request()
    @Body()
    { email, first_name, last_name, password, phone }: CreateUserDto,
  ): Promise<UserResponse | HttpException> {
    try {
      const options = {
        where: {
          [Op.or]: [ { email }, { phone } ]
        }
      };
      const userExist = await this.usersService.findOne(options);
      if (userExist) {
          return new ConflictException('Email or Phone already in Use');
      }
      const user = await this.authService.signUpUser({
        email,
        first_name,
        last_name,
        password,
        phone,
      });

      delete user.password;

      return {
        success: true,
        data: user
      };
    } catch (error) {
      return new InternalServerErrorException()
    }
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req): Promise<LoginResponse | HttpException> {
    try {
      const jwtObject = await this.authService.getToken(req.user);
      return {
        success: true,
        data: jwtObject
      };
    } catch (error) {
      return new InternalServerErrorException()
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('users/me')
  async me(@Request() req): Promise<UserResponse | HttpException> {
    try {
      const user = await this.usersService.findById(req.user.id);
      return {
        success: true,
        data: user
      };
    } catch (error) {
      return new InternalServerErrorException()
    }
  }
}
