import { TestBed, inject } from '@angular/core/testing';

import { LuegaresService } from './luegares.service';

describe('LuegaresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LuegaresService]
    });
  });

  it('should be created', inject([LuegaresService], (service: LuegaresService) => {
    expect(service).toBeTruthy();
  }));
});
