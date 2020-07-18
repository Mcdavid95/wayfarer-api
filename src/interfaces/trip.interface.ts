export interface Seats {
  number: number;
  is_taken: boolean;
}

export interface GetTrip {
  id?: number

  bus_id: number;

  origin: string;

  destination: string;

  trip_date: Date | string;

  status: string;

  fare: number;

  seats: Seats[]
}