import {
  Controller,
  Request,
  Post,
  Body,
  Param,
  Get,
  UseGuards,
} from '@nestjs/common';
import { RoutesService } from './Routes.service';
import { CreateRoutesDto } from './dtos/routes.dto';
import { handleException } from '../utils/errorResponse';
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
  ): Promise<RouteResponse | any> {
    try {
      const options = {
        where: { origin, destination },
      };
      const routeExist = await this.routeService.findOne(options);
      if (routeExist) {
        return handleException('CONFLICT', 'Route with the same origin and destination already exist');
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
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('routes/:id')
  async getRoute(@Param() params: { id: number }): Promise<RouteResponse | any> {
    try {
      const route = await this.routeService.findById(params.id);
      if (!route) {
        return handleException('NOT_FOUND', 'Route not found');
      }
      return {
        success: true,
        data: route,
      };
    } catch (error) {
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('routes')
  async getRoutes(): Promise<RoutesResponse> {
    try {
      const routes = await this.routeService.findAll({});
      return {
        success: true,
        data: routes,
      };
    } catch (error) {
      return error;
    }
  }
}
