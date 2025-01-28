import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrigadeirosComponent } from './brigadeiros.component';

describe('BrigadeirosComponent', () => {
  let component: BrigadeirosComponent;
  let fixture: ComponentFixture<BrigadeirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrigadeirosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrigadeirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
