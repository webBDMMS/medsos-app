import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GedungModule } from './gedung/gedung.module';
import { NoTlpModule } from './asetdigital/no_tlp/no_tlp.module';
import { InstagramModule } from './asetdigital/instagram/instagram.module';
import { GmapsModule } from './asetdigital/gmaps/gmaps.module';

@Module({
  imports: [
    UserModule,
    GedungModule,
    NoTlpModule,
    InstagramModule,
    GmapsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
