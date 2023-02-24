import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpUserDto } from 'src/shared/dto';
import { SignInUserDto } from 'src/shared/dto/SignInUser.dto';
import { VerifyUserDto } from '../../shared/dto/verifyuser.dto';
import { ResendOtpDto } from 'src/shared/dto/ResendOtp.dto';

@Controller('')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signUp')
  signUpUser(@Body() user: SignUpUserDto) {
    return this.authService.SignUp(user);
  }
  @Post('signin')
  signInUser(@Body() user: SignInUserDto) {
    return this.authService.SignIn(user);
  }
  @Post('verify')
  VerifyUser(@Body() user: VerifyUserDto) {
    return this.authService.verifyUser(user);
  }
  @Post('resendotp')
  ResendOtp(@Body() user: ResendOtpDto) {
    return this.authService.ResendOtp(user);
  }
}
