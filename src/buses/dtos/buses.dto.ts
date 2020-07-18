import { IsNotEmpty, IsString, IsNumberString, IsNumber } from "class-validator";

export class CreateBuses {

  @IsNotEmpty()
  @IsString()
  number_plate: string;

  @IsNotEmpty()
  @IsString()
  manufacturer: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsNumberString()
  year: string;

  @IsNotEmpty()
  @IsNumber()
  capacity: number;
}

