import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/Users.service';
import { CreateUserDto } from '../users/dtos/users.dto';
import { JwtPayload, JwtObject } from './auth.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  async signUpUser(body: CreateUserDto): Promise<any> {
    try {
      const hashedPassword = await this.hashPassword(body.password);
      
      const user = await this.usersService.create({ ...body, password: hashedPassword, });
      return user;
    } catch (error) {
      return error
    }
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = process.env.SALT;
    const hash = await bcrypt.hash(password, parseInt(saltRounds, 10) || 10);
    return hash;
  }

  private isPassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  } 

  async validateUser(phone: string, pass: string): Promise<any> {
      return new Promise( async (resolve, reject) =>{
        try {
          const options = {
            where: { phone },
          };
          const user = await this.usersService.findOne(options);
          if (user && this.isPassword( pass, user.password )) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password, ...result } = user['dataValues'];
            resolve(result);
          } else {
            resolve(null);
          }
          
        } catch (error) {
          reject(error)
        }
      })
      
    }


  async getToken(user: JwtPayload): Promise<JwtObject> {
    const payload = { email: user.email, sub: user.id, roles: user.roles };
    const token = this.jwtService.sign(payload);
    return { user, token }
  }
}


