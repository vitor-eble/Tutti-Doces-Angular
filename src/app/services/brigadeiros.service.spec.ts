import { TestBed } from '@angular/core/testing';

import { BrigadeirosService } from '../../services/brigadeiros.service';

describe('BrigadeirosService', () => {
  let service: BrigadeirosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrigadeirosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
