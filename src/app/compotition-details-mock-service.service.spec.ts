import { TestBed, inject } from '@angular/core/testing';

import { CompotitionDetailsMockServiceService } from './compotition-details-mock-service.service';

describe('CompotitionDetailsMockServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompotitionDetailsMockServiceService]
    });
  });

  it('should be created', inject([CompotitionDetailsMockServiceService], (service: CompotitionDetailsMockServiceService) => {
    expect(service).toBeTruthy();
  }));
});
