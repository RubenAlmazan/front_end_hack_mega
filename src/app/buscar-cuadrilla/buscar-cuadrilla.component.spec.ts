import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCuadrillaComponent } from './buscar-cuadrilla.component';

describe('BuscarCuadrillaComponent', () => {
  let component: BuscarCuadrillaComponent;
  let fixture: ComponentFixture<BuscarCuadrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarCuadrillaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarCuadrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
