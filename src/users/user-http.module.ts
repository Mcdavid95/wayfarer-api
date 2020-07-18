import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './user.module';
import { UsersService } from './Users.service';
import { UserController } from './Users.controller';
import { AuthService } from '../auth/Auth.service';
import { LocalStrategy } from '../auth/local.strategy';
import { jwtConstants } from '../utils/constants';
import { JwtStrategy } from '../auth/jwt.strategy';

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
