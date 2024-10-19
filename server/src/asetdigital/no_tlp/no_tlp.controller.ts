import {
  Body,
  Controller,
  Delete,
  Get,
  // Post,
  // Body,
  // Patch,
  Param,
  Post,
  // Delete,
} from '@nestjs/common';
import { NoTlpService } from './no_tlp.service';
// import { CreateNoTlpDto } from './dto/create-no_tlp.dto';
// import { UpdateNoTlpDto } from './dto/update-no_tlp.dto';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { CreateNoTlpDto } from './dto/create-no_tlp.dto';

@Controller('/no-tlp')
@ApiTags('No Telepon')
export class NoTlpController {
  constructor(private readonly noTlpService: NoTlpService) {}
  @Get('')
  @ApiOperation({ summary: 'get no telepon by id sekretariat' })
  async getNoTlpbySekre(@Param('id_sekre') id) {
    return this.noTlpService.getNoTelpByIdUnit(id);
  }
  @Post('')
  @ApiBody({ type: CreateNoTlpDto })
  @ApiOperation({ summary: 'input no telepon' })
  async addTlpn(@Body() body: CreateNoTlpDto) {
    return this.noTlpService.insertTelp(body);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'input no telepon' })
  async deleteTlpn(@Param('id') id: string) {
    const idNumber = Number(id);
    return this.noTlpService.deleteOne(idNumber);
  }
  @Get('/all')
  @ApiOperation({ summary: 'get all no telepon' })
  async getAllNoTlp() {
    return this.noTlpService.findAll();
  }
}
