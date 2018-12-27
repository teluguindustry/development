import { TestBed } from '@angular/core/testing';

import { MoviereviewService } from './moviereview.service';

describe('MoviereviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviereviewService = TestBed.get(MoviereviewService);
    expect(service).toBeTruthy();
  });
});
