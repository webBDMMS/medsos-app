import { Test, TestingModule } from '@nestjs/testing';
import { NoTlpController } from './no_tlp.controller';
import { NoTlpService } from './no_tlp.service';

describe('NoTlpController', () => {
  let controller: NoTlpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoTlpController],
      providers: [NoTlpService],
    }).compile();

    controller = module.get<NoTlpController>(NoTlpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
