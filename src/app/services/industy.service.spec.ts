import { TestBed } from '@angular/core/testing';

import { IndustyService } from './industy.service';

describe('IndustyService', () => {
  let service: IndustyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndustyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
