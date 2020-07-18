import { CreateUser } from "src/users/users.dto"
import { JwtPayload } from "src/auth/auth.interface"

export const userReq = {
  user: {
    email: 'mcdavid@gmail.com',
    id: 3
  }
}

export const jwtResult = {
  user: userReq.user,
  token: 'ej1he7940847940834084940'
}

export const mockAuthService = {
  signUpUser: jest.fn().mockImplementation((body: CreateUser) => {
    return {
      email: body.email,
      first_name: body.first_name,
      last_name: body.last_name,
      phone: body.phone
    }
  }),
  findOne: jest.fn().mockImplementation((userObject: CreateUser) => {
    Promise.resolve({
      email: userObject.email,
      first_name: userObject.first_name,
      last_name: userObject.last_name,
      phone: userObject.phone
    })
  }),
  create: jest.fn().mockImplementation((body: CreateUser) => {
    return {
      email: body.email,
      first_name: body.first_name,
      last_name: body.last_name,
      phone: body.phone
    }
  }),
  login: jest.fn().mockImplementation((userReq) => {
    Promise.resolve(
      {
        success: true,
        data: jwtResult
      }
    )
  }),
  getToken: jest.fn().mockImplementation((user: JwtPayload) => {
    return {
      user,
      token: 'ej1he7940847940834084940'
    }
  })
}

export const mockJwtService = {
  sign: jest.fn().mockImplementation((payload: JwtPayload) => {
    return 'ej1he7940847940834084940'
  })
}
