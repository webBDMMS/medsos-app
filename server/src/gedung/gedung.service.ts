import { Injectable } from '@nestjs/common';
import { CreateGedungDto } from './dto/create-gedung.dto';
import { UpdateGedungDto } from './dto/update-gedung.dto';

@Injectable()
export class GedungService {
  create(createGedungDto: CreateGedungDto) {
    return 'This action adds a new gedung';
  }

  findAll() {
    return `This action returns all gedung`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gedung`;
  }

  update(id: number, updateGedungDto: UpdateGedungDto) {
    return `This action updates a #${id} gedung`;
  }

  remove(id: number) {
    return `This action removes a #${id} gedung`;
  }
}
