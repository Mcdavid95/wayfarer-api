export interface Seats {
  number: number;
  is_taken: boolean;
}

export interface GetTrip {
  id?: number

  bus_id: number;

  route_id: number;

  trip_date: Date | string;

  fare: number;
}