import { TestBed } from '@angular/core/testing';

import { ContatcsService } from './contatcs-service';

describe('ContatcsService', () => {
  let service: ContatcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
