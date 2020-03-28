import { TestBed } from '@angular/core/testing';

import { BedbaseService } from './bedbase.service';

describe('BedbaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BedbaseService = TestBed.get(BedbaseService);
    expect(service).toBeTruthy();
  });
});
