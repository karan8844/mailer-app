import { IsNotEmpty, IsEmail, IsAlphanumeric } from 'class-validator';

export class SignInUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  password: string;
}
