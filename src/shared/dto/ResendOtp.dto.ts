import { IsNotEmpty, IsEmail } from 'class-validator';

export class ResendOtpDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
