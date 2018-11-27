import { TestBed } from '@angular/core/testing';

import { CelebrityprofileService } from './celebrityprofile.service';

describe('CelebrityprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CelebrityprofileService = TestBed.get(CelebrityprofileService);
    expect(service).toBeTruthy();
  });
});
