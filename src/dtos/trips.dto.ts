import { IsNotEmpty, IsString, IsNumberString, IsNumber, IsDate, IsObject, IsArray } from "class-validator";
import { Seats } from "src/interfaces/trip.interface";

export class CreateTrips {

  @IsNotEmpty()
  @IsNumber()
  bus_id: number;

  @IsNotEmpty()
  @IsString()
  origin: string;

  @IsNotEmpty()
  @IsString()
  destination: string;

  @IsNotEmpty()
  @IsDate()
  trip_date: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsNumber()
  fare: number;

  @IsNotEmpty()
  @IsArray()
  seats: Seats[]
}

