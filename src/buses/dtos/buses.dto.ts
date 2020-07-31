import { IsNotEmpty, IsString, IsNumberString, IsNumber, IsOptional } from "class-validator";
import { ApiProperty, ApiHideProperty } from "@nestjs/swagger";

export class CreateBusesDto {

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  number_plate: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  manufacturer: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  model: string;

  @IsNotEmpty()
  @IsNumberString()
  @ApiProperty()
  year: string;

  @IsNotEmpty()
  // @IsNumber()
  @ApiProperty()
  capacity: number;

  @IsNotEmpty()
  @IsOptional()
  // @IsNumber()
  @ApiHideProperty()
  owner_id: number;
}

