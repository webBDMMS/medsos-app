import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GedungService } from './gedung.service';
import { CreateGedungDto } from './dto/create-gedung.dto';
import { UpdateGedungDto } from './dto/update-gedung.dto';

@Controller('gedung')
export class GedungController {
  constructor(private readonly gedungService: GedungService) {}

  @Post()
  create(@Body() createGedungDto: CreateGedungDto) {
    return this.gedungService.create(createGedungDto);
  }

  @Get()
  findAll() {
    return this.gedungService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gedungService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGedungDto: UpdateGedungDto) {
    return this.gedungService.update(+id, updateGedungDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gedungService.remove(+id);
  }
}
