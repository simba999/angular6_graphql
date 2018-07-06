import { TestBed, inject } from '@angular/core/testing';

import { MieFrontendCustomService } from './mie-frontend-custom.service';

describe('MieFrontendCustomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MieFrontendCustomService]
    });
  });

  it('should be created', inject([MieFrontendCustomService], (service: MieFrontendCustomService) => {
    expect(service).toBeTruthy();
  }));
});
