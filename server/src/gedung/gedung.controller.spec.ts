import { Test, TestingModule } from '@nestjs/testing';
import { GedungController } from './gedung.controller';
import { GedungService } from './gedung.service';

describe('GedungController', () => {
  let controller: GedungController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GedungController],
      providers: [GedungService],
    }).compile();

    controller = module.get<GedungController>(GedungController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
