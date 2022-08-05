import { TestBed } from '@angular/core/testing';

import { CompaniesServiceService } from './companies-service.service';

describe('CompaniesServiceService', () => {
  let service: CompaniesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompaniesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
