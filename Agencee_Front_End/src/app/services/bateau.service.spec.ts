import { TestBed, inject } from '@angular/core/testing';

import { BateauService } from './bateau.service';

describe('BateauService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BateauService]
    });
  });

  it('should be created', inject([BateauService], (service: BateauService) => {
    expect(service).toBeTruthy();
  }));
});
