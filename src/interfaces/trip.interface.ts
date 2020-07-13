export interface Seats {
  number: number;
  is_taken: boolean;
}

export interface GetTrip {
  bus_id: number;

  origin: string;

  destination: string;

  trip_date: Date;

  status: string;

  fare: number;

  seats: Seats[]
}