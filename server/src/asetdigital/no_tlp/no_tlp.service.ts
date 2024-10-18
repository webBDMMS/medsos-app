import { Injectable } from '@nestjs/common';
// import { CreateNoTlpDto } from './dto/create-no_tlp.dto';
// import { UpdateNoTlpDto } from './dto/update-no_tlp.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { noTlpIntf } from 'src/interface/no_tlp.intf';
@Injectable()
export class NoTlpService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    try {
      return this.prisma.asset_telepon.findMany();
    } catch (error) {
      throw error;
    }
  }
  async getNoTelpByIdUnit(idUnit: number): Promise<noTlpIntf[]> {
    try {
      const teleponRecords = await this.prisma.asset_telepon.findMany({
        where: {
          id_unit: idUnit,
        },
      });

      return teleponRecords;
    } catch (error) {
      throw error;
    }
  }
}
