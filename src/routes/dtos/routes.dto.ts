import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoutesDto {

  @IsNotEmpty()
  @IsString()
  origin: string;

  @IsNotEmpty()
  @IsString()
  destination: string;
}

