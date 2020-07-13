import { JwtObject, GetUser } from "./auth.interface";
import { GetBus } from "./bus.interface";

export interface UserResponse {
  success: boolean,
  data: GetUser
}

export interface ErrorResponse {
  status: string,
  message: string
}

export interface LoginResponse {
  success: boolean,
  data: JwtObject
}

export interface BusResponse {
  success: boolean,
  data: GetBus
}