import { Test, TestingModule } from '@nestjs/testing';
import { NoTlpService } from './no_tlp.service';

describe('NoTlpService', () => {
  let service: NoTlpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoTlpService],
    }).compile();

    service = module.get<NoTlpService>(NoTlpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
