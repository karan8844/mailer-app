import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MailModule } from 'src/mail/mail.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from 'src/shared/typeorm/typeorm.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(AppDataSource.options),
    AuthModule,
    MailModule,
  ],
})
export class ApiModule {}
