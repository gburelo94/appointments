import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaDetallesComponent } from './cita-detalles.component';

describe('CitaDetallesComponent', () => {
  let component: CitaDetallesComponent;
  let fixture: ComponentFixture<CitaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitaDetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
