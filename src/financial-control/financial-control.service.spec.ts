import { Test, TestingModule } from '@nestjs/testing';
import { FinancialControlService } from './financial-control.service';

describe('FinancialControlService', () => {
  let service: FinancialControlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinancialControlService],
    }).compile();

    service = module.get<FinancialControlService>(FinancialControlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
