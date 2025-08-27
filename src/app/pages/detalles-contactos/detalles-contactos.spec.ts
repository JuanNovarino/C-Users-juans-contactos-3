import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesContactos } from './detalles-contactos';

describe('DetallesContactos', () => {
  let component: DetallesContactos;
  let fixture: ComponentFixture<DetallesContactos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesContactos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesContactos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
