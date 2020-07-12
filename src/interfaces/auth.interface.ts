export interface JwtPayload {
  email: string,
  id: number
}

export interface JwtObject {
  user: JwtPayload,
  token: string
}