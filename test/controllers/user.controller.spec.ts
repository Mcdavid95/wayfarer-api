import { Test, TestingModule } from '@nestjs/testing';
import { PassportModule } from '@nestjs/passport';
import { JwtService, JwtModule } from '@nestjs/jwt';
import { getModelToken } from '@nestjs/sequelize';
import { UserController } from '../../src/controllers/Users.controller';
import { UsersService } from '../../src/services/Users.service';
import { Users } from '../../src/models/Users';
import { AuthService } from '../../src/services/Auth.service';
import { UserResponse } from '../../src/interfaces/response';
import { jwtConstants } from '../../src/utils/constants';
import { JwtStrategy } from '../../src/strategy/jwt.strategy';
import { CreateUser } from 'src/dtos/users.dto';
import { mockAuthService, mockJwtService, jwtResult } from '../__mocks__/user.mocks';



describe('UserController', () => {
  let usersController: UserController;

  const userResult: CreateUser = {
    email: 'yuil@gmail.com',
    first_name: 'Mcdavid',
    last_name: 'Eme',
    phone: '09036792739',
    password: 'jabikejej'
  }
  const result: UserResponse = {
    success: true,
    data: {
      email: 'yuil@gmail.com',
      first_name: 'Mcdavid',
      last_name: 'Eme',
      phone: '09036792739'
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PassportModule.register({
          defaultStrategy: 'jwt'
        }),
        JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '7d' }
        })
      ],
      providers: [
        UsersService,
        AuthService,
        JwtService,
        JwtStrategy,
        {
          provide: getModelToken(Users),
          useValue: mockAuthService,
        },
        {
          provide: JwtService,
          useValue: mockJwtService
        }
      ],
      controllers: [UserController],
    }).compile();

    usersController = module.get<UserController>(UserController);
  });



  describe('register', () => {
    it('should register a new user', async () => {
      const response = await usersController.register(userResult)
      jest.spyOn(mockAuthService, 'signUpUser').mockImplementation(async() => userResult)
      expect(response).toStrictEqual(result);
    })
  })

  describe('login', () => {
    it('should return user details and token', async () => {
      const userReq = {
        user: {
          email: 'mcdavid@gmail.com',
          id: 3
        }
      }

      const loginResponse = {
        success: true,
        data: jwtResult
      }
      const response = await usersController.login(userReq)
      jest.spyOn(mockAuthService, 'getToken').mockImplementation(async() => jwtResult)
      expect(response.data).toHaveProperty('token');
      expect(response).toEqual(loginResponse);
    })
  })
});
