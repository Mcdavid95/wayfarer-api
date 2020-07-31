import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { DriversService } from '../../drivers/Drivers.service';

@Injectable()
export class DriversGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly driverService: DriversService
    ) {}

  async canActivate(context: ExecutionContext):  Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { user } = request;
    const isDriver = await this.driverService.findOne({ where: { user_id: user.id} });

    return isDriver ? true : false;
  }
}