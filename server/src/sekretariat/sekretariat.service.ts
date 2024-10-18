import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MasterUnitPjIntf } from 'src/interface/MasterUnitPj.intf';

@Injectable()
export class SekretariatService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<MasterUnitPjIntf[]> {
    const masterUnits = await this.prisma.master_unit_pj.findMany();

    const idUnits = masterUnits.map((unit) => unit.id_unit).filter(Boolean);

    const [googleMaps, medsos] = await Promise.all([
      this.prisma.asset_google_maps.findMany({
        where: {
          id_unit: {
            in: idUnits,
          },
        },
      }),
      this.prisma.asset_medsos.findMany({
        where: {
          id_unit: {
            in: idUnits,
          },
        },
      }),
    ]);

    return masterUnits.map((unit) => {
      const googleMap = googleMaps.find((gm) => gm.id_unit === unit.id_unit);
      const medso = medsos.find((m) => m.id_unit === unit.id_unit);

      return {
        ...unit,
        instagram: medso?.username || null, // Ambil username sebagai instagram
        url_google_maps: googleMap?.url_google_maps || null,
      };
    });
  }

  async findByPjCabang(idPjCabang: string): Promise<MasterUnitPjIntf[]> {
    const masterUnits = await this.prisma.master_unit_pj.findMany();

    const filteredUnits = masterUnits.filter((record) => {
      const idPjCabangArray = record.id_pj_cabang
        ? record.id_pj_cabang.split(',')
        : [];

      return idPjCabangArray.includes(idPjCabang);
    });

    const idUnits = filteredUnits.map((unit) => unit.id_unit).filter(Boolean);

    const [googleMaps, medsos] = await Promise.all([
      this.prisma.asset_google_maps.findMany({
        where: {
          id_unit: {
            in: idUnits,
          },
        },
      }),
      this.prisma.asset_medsos.findMany({
        where: {
          id_unit: {
            in: idUnits,
          },
        },
      }),
    ]);

    return filteredUnits.map((unit) => {
      const googleMap = googleMaps.find((gm) => gm.id_unit === unit.id_unit);
      const medso = medsos.find((m) => m.id_unit === unit.id_unit);

      return {
        ...unit,
        instagram: medso?.username || null,
        url_google_maps: googleMap?.url_google_maps || null,
      };
    });
  }
}
