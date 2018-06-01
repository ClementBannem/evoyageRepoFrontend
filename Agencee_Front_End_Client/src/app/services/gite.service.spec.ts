import { TestBed, inject } from '@angular/core/testing';

import { GiteService } from './gite.service';

describe('GiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiteService]
    });
  });

  it('should be created', inject([GiteService], (service: GiteService) => {
    expect(service).toBeTruthy();
  }));
});
