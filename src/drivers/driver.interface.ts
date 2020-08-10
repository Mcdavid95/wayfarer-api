import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class DriverCredentials {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  drivers_license_url: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  license_expiry_date: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  license_fullname: string
}

export interface GetDriver {
  id?: number,
  user_id: number,
  credentials: DriverCredentials
}