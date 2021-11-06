import { TestBed } from '@angular/core/testing';

import { ConserjeService } from './conserje.service';

describe('ConserjeService', () => {
  let service: ConserjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConserjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
