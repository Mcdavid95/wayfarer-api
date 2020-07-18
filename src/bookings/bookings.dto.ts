import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateBookings {

  @IsNotEmpty()
  @IsNumber()
  trip_id: number;

  @IsNotEmpty()
  @IsNumber()
  seat_number: number;
}

