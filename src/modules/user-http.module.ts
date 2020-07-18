import { Module } from '@nestjs/common';
import { UsersModule } from './user.module';
import { UsersService } from '../services/Users.service';
import { UserController } from '../controllers/Users.controller';
import { AuthService } from '../services/Auth.service';
import { LocalStrategy } from '../strategy/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../utils/constants';
import { JwtStrategy } from '../strategy/jwt.strategy';

console.log(jwtConstants.secret)
@Module({
  imports: [
    UsersModule,
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' }
    })
  ],
  providers: [UsersService, AuthService, LocalStrategy, JwtStrategy],
  controllers: [UserController],
  exports: [UsersService, JwtModule]
})
export class UserHttpModule {}
