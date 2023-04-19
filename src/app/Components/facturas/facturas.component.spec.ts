import { ComponentFixture, TestBed } from '@angular/core/testing';

import { facturasComponent } from './facturas.component';

describe('FacturasComponent', () => {
  let component: facturasComponent;
  let fixture: ComponentFixture<facturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ facturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(facturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
