import { TestBed } from '@angular/core/testing';

import { BrigadeiroInicioService } from './brigadeiro-inicio.service';

describe('BrigadeiroInicioService', () => {
  let service: BrigadeiroInicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrigadeiroInicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
