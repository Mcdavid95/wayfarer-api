/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Request, Post, Body, UseFilters, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dtos/users.dto';
import { UserResponse, LoginResponse } from '../interfaces/response';
import { AuthService } from '../auth/Auth.service';
import { UsersService } from './Users.service';
import { HttpExceptionFilter, Exception } from '../utils/errorResponse';
import { AuthGuard } from '@nestjs/passport';

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
  ): Promise<UserResponse> {
    try {
      const options = {
        where: { email },
      };
      const userExist = await this.usersService.findOne(options);
      if (userExist) {
        console.log(userExist)
        return new Promise((resolve, reject) => {
          reject(
            new Exception({
              status: 'CONFLICT',
              message: 'Email already in Use',
            }),
          );
        });
      }
      const user = await this.authService.signUpUser({
        email,
        first_name,
        last_name,
        password,
        phone,
      });

      return {
        success: true,
        data: user,
      };
    } catch (error) {
      return error;
    }
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req): Promise<LoginResponse> {
    try {
      const jwtObject = await this.authService.getToken(req.user);
      return {
        success: true,
        data: jwtObject
      };
    } catch (error) {return error}
  }
}
