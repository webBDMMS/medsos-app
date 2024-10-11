import { Test, TestingModule } from '@nestjs/testing';
import { GedungService } from './gedung.service';

describe('GedungService', () => {
  let service: GedungService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GedungService],
    }).compile();

    service = module.get<GedungService>(GedungService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
