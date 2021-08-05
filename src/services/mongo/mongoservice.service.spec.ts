import { Test, TestingModule } from '@nestjs/testing';
import { MongoserviceService } from './mongoservice.service';

describe('MongoserviceService', () => {
  let service: MongoserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongoserviceService],
    }).compile();

    service = module.get<MongoserviceService>(MongoserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
