import { TestBed } from '@angular/core/testing';

import { MattressService } from './mattress.service';

describe('MattressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MattressService = TestBed.get(MattressService);
    expect(service).toBeTruthy();
  });
});
