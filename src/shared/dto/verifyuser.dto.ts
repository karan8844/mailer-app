import { IsEmail, IsNotEmpty } from 'class-validator';

export class VerifyUserDto {
  @IsNotEmpty({ message: 'Email Is Required' })
  @IsEmail({}, { message: 'Email must be valid email address' })
  email: string;

  @IsNotEmpty({ message: 'Otp Is Required' })
  otp: string;
}
