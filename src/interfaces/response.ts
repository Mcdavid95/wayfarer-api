import { JwtObject, GetUser } from "./auth.interface";
import { GetBus } from "./bus.interface";
import { GetTrip } from "./trip.interface";
import { GetBooking } from "./bookings.interface";

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
export interface BusesResponse {
  success: boolean,
  data: GetBus[]
}

export interface TripResponse {
  success: boolean,
  data: GetTrip
}
export interface TripsResponse {
  success: boolean,
  data: GetTrip[]
}

export interface BookingResponse {
  success: boolean,
  data: GetBooking
}
export interface BookingsResponse {
  success: boolean,
  data: GetBooking[]
}