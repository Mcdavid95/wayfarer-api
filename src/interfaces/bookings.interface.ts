import { Seats } from "./trip.interface";

export interface GetBooking {
  id?: number;
  trip_id: number;
  seat_number: number;
  user_id: number;
}

export interface CheckSeatAvailability {
  status: boolean;
  seats: Seats[]
}