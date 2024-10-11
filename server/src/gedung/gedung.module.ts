import { Module } from '@nestjs/common';
import { GedungService } from './gedung.service';
import { GedungController } from './gedung.controller';

@Module({
  controllers: [GedungController],
  providers: [GedungService],
})
export class GedungModule {}
