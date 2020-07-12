import { IsEmail, IsNotEmpty, IsString, IsNumberString, IsNumber } from "class-validator";

export class CreateUser {
  @IsNotEmpty()
  @IsString()
  first_name: string;

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

export interface GetUser {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}
