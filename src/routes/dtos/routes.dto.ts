import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateRoutesDto {

  @IsNotEmpty()
  @IsString()
  
  origin: string;

  @IsNotEmpty()
  @IsString()
  
  destination: string;
}

