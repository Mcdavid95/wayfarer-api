import { IsNotEmpty, IsNumber, IsObject, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DriverCredentials } from "../driver.interface";
import { ApiProperty } from "@nestjs/swagger";

export class CreateDriversDto {

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => DriverCredentials)
  @ApiProperty({
    description: 'Drivers Credentials from license',
    type: DriverCredentials
  })
  credentials: DriverCredentials;

  @IsNumber()
  @IsOptional()
  user_id?: number;
}

