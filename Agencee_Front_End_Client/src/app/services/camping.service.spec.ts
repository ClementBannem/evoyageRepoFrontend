import { TestBed, inject } from '@angular/core/testing';

import { CampingService } from './camping.service';

describe('CampingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampingService]
    });
  });

  it('should be created', inject([CampingService], (service: CampingService) => {
    expect(service).toBeTruthy();
  }));
});
