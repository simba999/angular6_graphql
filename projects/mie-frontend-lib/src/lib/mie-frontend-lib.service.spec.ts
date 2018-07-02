import { TestBed, inject } from '@angular/core/testing';

import { MieFrontendLibService } from './mie-frontend-lib.service';

describe('MieFrontendLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MieFrontendLibService]
    });
  });

  it('should be created', inject([MieFrontendLibService], (service: MieFrontendLibService) => {
    expect(service).toBeTruthy();
  }));
});
