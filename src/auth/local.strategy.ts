import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './Auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'phone'
    });
  }

  async validate(phone: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(phone, password);
    if (!user) {
      throw new UnauthorizedException('Phone or password not correct');
    }
    return user;
  }
}
