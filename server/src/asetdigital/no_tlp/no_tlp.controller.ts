import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  Param,
  // Delete,
} from '@nestjs/common';
import { NoTlpService } from './no_tlp.service';
// import { CreateNoTlpDto } from './dto/create-no_tlp.dto';
// import { UpdateNoTlpDto } from './dto/update-no_tlp.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('/no-tlp')
@ApiTags('No Telepon')
export class NoTlpController {
  constructor(private readonly noTlpService: NoTlpService) {}
  @Get('')
  @ApiOperation({ summary: 'get no telepon by id sekretariat' })
  async getNoTlpbySekre(@Param('id_sekre') id) {
    return this.noTlpService.getNoTelpByIdUnit(id);
  }
  @Get('/all')
  @ApiOperation({ summary: 'get all no telepon' })
  async getAllNoTlp() {
    return this.noTlpService.findAll();
  }
}
