export interface JwtPayload {
  email: string,
  id: number
}

export interface JwtObject {
  user: JwtPayload,
  token: string
}

export interface GetUser {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}