import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SignUpUserDto } from 'src/shared/dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendOtp(user: SignUpUserDto, otp: string) {
    await this.mailerService.sendMail({
      to: user.email,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './sendOtp.hbs', // `.hbs` extension is appended automatically
      context: {
        // ✏️ filling curly brackets with content
        name: user.firstName + ' ' + user.lastName,
        otp,
      },
    });
  }
}
