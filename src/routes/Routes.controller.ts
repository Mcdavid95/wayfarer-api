import {
  Controller,
  Request,
  Post,
  Body,
  Param,
  Get,
  UseGuards,
  InternalServerErrorException,
  HttpException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { RoutesService } from './Routes.service';
import { CreateRoutesDto } from './dtos/routes.dto';
import { RouteResponse, RoutesResponse } from '../interfaces/response';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BusesService } from '../buses/Buses.service';

@Controller()
export class RouteController {
  constructor(private readonly routeService: RoutesService, private readonly busService: BusesService) {}

  /**
   * @method create
   *
   */
  @UseGuards(JwtAuthGuard)
  @Post('routes')
  async create(
    @Request()
    @Body()
    { origin, destination }: CreateRoutesDto,
  ): Promise<RouteResponse | HttpException> {
    try {
      const options = {
        where: { origin, destination },
      };
      const routeExist = await this.routeService.findOne(options);
      if (routeExist) {
        return new ConflictException('Route with the same origin and destination already exist');
      }
      const route = await this.routeService.create({
        origin,
        destination,
      });
      return {
        success: true,
        data: route,
      };
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('routes/:id')
  async getRoute(@Param() params: { id: number }): Promise<RouteResponse | HttpException> {
    try {
      const route = await this.routeService.findById(params.id);
      if (!route) {
        return new NotFoundException('Route not found');
      }
      return {
        success: true,
        data: route,
      };
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('routes')
  async getRoutes(): Promise<RoutesResponse | HttpException> {
    try {
      const routes = await this.routeService.findAll({});
      return {
        success: true,
        data: routes,
      };
    } catch (error) {
      return new InternalServerErrorException();
    }
  }
}
