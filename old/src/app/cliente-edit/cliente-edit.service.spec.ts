import { TestBed } from '@angular/core/testing';

import { ClienteEditService } from './cliente-edit.service';

describe('ClienteEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClienteEditService = TestBed.get(ClienteEditService);
    expect(service).toBeTruthy();
  });
});
