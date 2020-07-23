import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateBookingsDto {

  @IsNotEmpty()
  @IsNumber()
  trip_id: number;

  @IsNotEmpty()
  @IsNumber()
  seat_number: number;
}

