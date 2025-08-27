import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Andaporfavor } from './andaporfavor';

describe('Andaporfavor', () => {
  let component: Andaporfavor;
  let fixture: ComponentFixture<Andaporfavor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Andaporfavor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Andaporfavor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
