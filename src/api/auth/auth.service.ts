import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignUpUserDto } from 'src/shared/dto';
import * as otpGenerator from 'otp-generator';
import { MailService } from '../../mail/mail.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../shared/database/entities/user.entity';
import { Repository } from 'typeorm';
import { VerifyUserDto } from '../../shared/dto/verifyuser.dto';
// import { VerifyUserDto } from 'src/shared/dto/verifyuser.dto';
// import { SignInUserDto } from 'src/shared/dto/SignInUser.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly mailService: MailService,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async SignUp(CreateUserDto: SignUpUserDto) {
    const { firstName, lastName, email, password } = CreateUserDto;
    const otp = otpGenerator.generate(4, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });
    const user = await this.userRepository.create({
      firstName,
      lastName,
      email,
      password,
      otp,
    });
    await this.userRepository.save(user);
    await this.mailService.sendOtp(user, otp);

    return 'User created Successfully';
  }

  async verifyUser(data: VerifyUserDto) {
    const user = await this.userRepository.findOneBy({ email: data.email });

    if (!user) {
      throw new HttpException('Invalid User Email', HttpStatus.BAD_REQUEST);
    }

    if (data.otp === user.otp) {
      await this.userRepository.update(
        { email: data.email },
        { is_verify: true, otp: null },
      );
      return 'User Account Verified Successfully';
    } else {
      throw new HttpException('Invalid Otp', HttpStatus.BAD_REQUEST);
    }
  }
  async ResendOtp({ email }) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new HttpException('user not found', HttpStatus.FORBIDDEN);
    }
    if (user) {
      const otp = otpGenerator.generate(4, {
        digits: true,
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
      });
      await this.userRepository.update({ email }, { otp });
      await this.mailService.sendOtp(user, otp);
      return 'otp sent';
    }
  }
  async SignIn({ email, password }) {
    const user = await this.userRepository.findOne({
      where: { email, password },
    });
    if (user) {
      return 'signin successfull';
    } else {
      return 'user not found';
    }
  }
}
