import { TestBed } from '@angular/core/testing';

import { BebidasInicioService } from './bebidas-inicio.service';

describe('BebidasInicioService', () => {
  let service: BebidasInicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BebidasInicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
