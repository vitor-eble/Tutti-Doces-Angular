import { TestBed } from '@angular/core/testing';
import { TrufaInicioService } from './trufa-inicio.service';

describe('TrufaInicioService', () => {
  let service: TrufaInicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrufaInicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
