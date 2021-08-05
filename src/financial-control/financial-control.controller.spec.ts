import { Test, TestingModule } from '@nestjs/testing';
import { FinancialControlController } from './financial-control.controller';

describe('FinancialControlController', () => {
  let controller: FinancialControlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinancialControlController],
    }).compile();

    controller = module.get<FinancialControlController>(FinancialControlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
