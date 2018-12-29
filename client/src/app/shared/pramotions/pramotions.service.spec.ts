import { TestBed } from '@angular/core/testing';

import { PramotionsService } from './pramotions.service';

describe('PramotionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PramotionsService = TestBed.get(PramotionsService);
    expect(service).toBeTruthy();
  });
});
