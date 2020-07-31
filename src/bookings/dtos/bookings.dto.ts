import { IsNotEmpty, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateBookingsDto {

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Database Id of trip to book for.'
  })
  trip_id: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  seat_number: number;
}

