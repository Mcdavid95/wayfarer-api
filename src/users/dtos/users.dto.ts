import { IsEmail, IsNotEmpty, IsString, IsNumberString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  
  first_name: string;

  @IsNotEmpty()
  @IsString()
  
  last_name: string;

  @IsNotEmpty()
  @IsString()
  
  password: string;

  @IsNotEmpty()
  @IsEmail()
  
  email: string;

  @IsNotEmpty()
  @IsNumberString()
  
  phone: string;
}
export class LoginUserDto {

  @IsNotEmpty()
  @IsString()
  
  password: string;

  @IsNotEmpty()
  @IsNumberString()
  
  phone: string;
}

