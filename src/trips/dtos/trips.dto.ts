import { IsNotEmpty, IsNumberString, IsNumber, IsDateString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTripsDto {

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  bus_id: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  route_id: number;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  trip_date: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsNumberString()
  fare: number;
}

