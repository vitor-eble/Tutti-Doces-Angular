import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrufasComponent } from './trufas.component';

describe('TrufasComponent', () => {
  let component: TrufasComponent;
  let fixture: ComponentFixture<TrufasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrufasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrufasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
