import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateRoutesDto {

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  origin: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  destination: string;
}

