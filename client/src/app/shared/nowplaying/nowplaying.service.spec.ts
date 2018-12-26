import { TestBed } from '@angular/core/testing';

import { NowplayingService } from './nowplaying.service';

describe('NowplayingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NowplayingService = TestBed.get(NowplayingService);
    expect(service).toBeTruthy();
  });
});
