import { Module } from '@nestjs/common';
import { NoTlpService } from './no_tlp.service';
import { NoTlpController } from './no_tlp.controller';

@Module({
  controllers: [NoTlpController],
  providers: [NoTlpService],
})
export class NoTlpModule {}
