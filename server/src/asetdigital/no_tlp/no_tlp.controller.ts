import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NoTlpService } from './no_tlp.service';
import { CreateNoTlpDto } from './dto/create-no_tlp.dto';
import { UpdateNoTlpDto } from './dto/update-no_tlp.dto';

@Controller('no-tlp')
export class NoTlpController {
  constructor(private readonly noTlpService: NoTlpService) {}

  @Post()
  create(@Body() createNoTlpDto: CreateNoTlpDto) {
    return this.noTlpService.create(createNoTlpDto);
  }

  @Get()
  findAll() {
    return this.noTlpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noTlpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoTlpDto: UpdateNoTlpDto) {
    return this.noTlpService.update(+id, updateNoTlpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noTlpService.remove(+id);
  }
}
