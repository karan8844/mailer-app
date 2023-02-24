/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsEmail, IsAlphanumeric } from 'class-validator';

export class SignUpUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  password: string;
}
