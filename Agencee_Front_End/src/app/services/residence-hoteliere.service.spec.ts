import { TestBed, inject } from '@angular/core/testing';

import { ResidenceHoteliereService } from './residence-hoteliere.service';

describe('ResidenceHoteliereService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResidenceHoteliereService]
    });
  });

  it('should be created', inject([ResidenceHoteliereService], (service: ResidenceHoteliereService) => {
    expect(service).toBeTruthy();
  }));
});
