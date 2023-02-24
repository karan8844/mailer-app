import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [ApiModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
