import { TestBed, inject } from '@angular/core/testing';

import { AvionService } from './avion.service';

describe('AvionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvionService]
    });
  });

  it('should be created', inject([AvionService], (service: AvionService) => {
    expect(service).toBeTruthy();
  }));
});
