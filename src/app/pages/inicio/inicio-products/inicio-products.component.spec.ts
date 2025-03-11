import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioProductsComponent } from './inicio-products.component';

describe('InicioProductsComponent', () => {
  let component: InicioProductsComponent;
  let fixture: ComponentFixture<InicioProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
