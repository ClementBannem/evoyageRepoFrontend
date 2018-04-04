import { TestBed, inject } from '@angular/core/testing';

import { AutocarService } from './autocar.service';

describe('AutocarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutocarService]
    });
  });

  it('should be created', inject([AutocarService], (service: AutocarService) => {
    expect(service).toBeTruthy();
  }));
});
