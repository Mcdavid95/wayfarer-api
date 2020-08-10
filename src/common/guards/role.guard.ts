import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const matchRoles = (roles: string[], userRoles: string[]) => {
  const availableRoles = []
  for(const role of roles) {
    if(userRoles.includes(role)) {
      availableRoles.push(role)
    }
  }
  return availableRoles.length > 0
}
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector
    ) {}

  async canActivate(context: ExecutionContext):  Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const { user } = request;
    
    return matchRoles(roles, user.roles);
  }
}