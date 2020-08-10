import { JwtObject, GetUser } from "../auth/auth.interface";
import { GetBus } from "../buses/bus.interface";
import { GetTrip } from "../trips/trip.interface";
import { GetBooking } from "../bookings/bookings.interface";
import { GetRoute } from "src/routes/route.interface";
import { GetDriver } from "src/drivers/driver.interface";

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

export interface RouteResponse {
  success: boolean,
  data: GetRoute
}
export interface RoutesResponse {
  success: boolean,
  data: GetRoute[]
}

export interface DriverResponse {
  success: boolean,
  data: GetDriver
}
export interface DriversResponse {
  success: boolean,
  data: GetDriver[]
}