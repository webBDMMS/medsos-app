import {
  Controller,
  Get,
  Query,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { SekretariatService } from './sekretariat.service';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
// import { CreateSekretariatDto } from './dto/create-sekretariat.dto';
// import { UpdateSekretariatDto } from './dto/update-sekretariat.dto';

@Controller('sekretariat')
@ApiTags('Sekretariat')
export class SekretariatController {
  constructor(private readonly sekretariatService: SekretariatService) {}

  // @Post()
  // create(@Body() createSekretariatDto: CreateSekretariatDto) {
  //   return this.sekretariatService.create(createSekretariatDto);
  // }

  @Get()
  @ApiOperation({ summary: 'Get Sekretariat' })
  @ApiQuery({ name: 'idpjcabang', example: '2', required: false })
  findAll(@Query('idpjcabang') idPjCabang?: string) {
    // Jika ada query parameter 'idpjcabang', maka panggil findByPjCabang
    if (idPjCabang) {
      console.log(idPjCabang);
      return this.sekretariatService.findByPjCabang(idPjCabang);
    }
    console.log('tidak ada idpjcabang');

    return this.sekretariatService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.sekretariatService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateSekretariatDto: UpdateSekretariatDto,
  // ) {
  //   return this.sekretariatService.update(+id, updateSekretariatDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.sekretariatService.remove(+id);
  // }
}
