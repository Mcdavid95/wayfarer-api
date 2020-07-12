import { GetUser } from "src/dtos/users.dto";
import { JwtObject } from "./auth.interface";

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