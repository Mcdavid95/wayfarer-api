import { IsNotEmpty, IsString, IsNumberString, IsOptional } from "class-validator";
import { ApiProperty, ApiHideProperty } from "@nestjs/swagger";

export class CreateBusesDto {

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
  // @IsNumber()
  
  capacity: number;

  @IsNotEmpty()
  @IsOptional()
  // @IsNumber()
  @ApiHideProperty()
  owner_id: number;
}

