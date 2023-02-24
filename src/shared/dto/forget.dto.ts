import { IsNotEmpty, IsEmail, IsAlphanumeric } from 'class-validator';

export class ForgetPassword {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  password: string;
}
