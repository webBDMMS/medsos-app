import { Injectable } from '@nestjs/common';
import { CreateNoTlpDto } from './dto/create-no_tlp.dto';
import { UpdateNoTlpDto } from './dto/update-no_tlp.dto';

@Injectable()
export class NoTlpService {
  create(createNoTlpDto: CreateNoTlpDto) {
    return 'This action adds a new noTlp';
  }

  findAll() {
    return `This action returns all noTlp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} noTlp`;
  }

  update(id: number, updateNoTlpDto: UpdateNoTlpDto) {
    return `This action updates a #${id} noTlp`;
  }

  remove(id: number) {
    return `This action removes a #${id} noTlp`;
  }
}
