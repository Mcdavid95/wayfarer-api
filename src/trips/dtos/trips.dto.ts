import { IsNotEmpty, IsNumberString, IsNumber, IsDateString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTripsDto {

  @IsNotEmpty()
  @IsNumber()
  
  bus_id: number;

  @IsNotEmpty()
  @IsNumber()
  
  route_id: number;

  @IsNotEmpty()
  @IsDateString()
  
  trip_date: string;

  @IsNotEmpty()
  
  @IsNumberString()
  fare: number;
}

