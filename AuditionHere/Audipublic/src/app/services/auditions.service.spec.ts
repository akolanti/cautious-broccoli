import { TestBed } from '@angular/core/testing';

import { AuditionsService } from './auditions.service';

describe('AuditionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuditionsService = TestBed.get(AuditionsService);
    expect(service).toBeTruthy();
  });
});
