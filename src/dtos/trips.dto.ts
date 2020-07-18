import { IsNotEmpty, IsString, IsNumberString, IsNumber, IsArray, IsDateString } from "class-validator";
import { Seats } from "../interfaces/trip.interface";

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
  @IsDateString()
  trip_date: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsNumberString()
  fare: number;

  @IsNotEmpty()
  @IsArray()
  seats: Seats[]
}

