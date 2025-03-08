import { TestBed } from '@angular/core/testing';

import { TrufaService } from '../../services/trufa.service';

describe('TrufaService', () => {
  let service: TrufaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrufaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
