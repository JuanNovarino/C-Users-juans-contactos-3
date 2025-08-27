import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeContactos } from './lista-de-contactos';

describe('ListaDeContactos', () => {
  let component: ListaDeContactos;
  let fixture: ComponentFixture<ListaDeContactos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDeContactos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeContactos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
