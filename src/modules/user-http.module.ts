import { Module } from '@nestjs/common';
import { UsersModule } from './user.module';
import { UsersService } from 'src/services/Users.service';
import { UserController } from 'src/controllers/Users.controller';
import { AuthService } from 'src/services/Auth.service';
import { LocalStrategy } from 'src/strategy/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/utils/constants';
import { JwtStrategy } from 'src/strategy/jwt.strategy';

console.log(jwtConstants.secret)
@Module({
  imports: [
    UsersModule,
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' }
    })
  ],
  providers: [UsersService, AuthService, LocalStrategy, JwtStrategy],
  controllers: [UserController],
  exports: [UsersService, JwtModule]
})
export class UserHttpModule {}
