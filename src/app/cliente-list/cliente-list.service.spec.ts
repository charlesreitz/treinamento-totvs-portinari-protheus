import { TestBed } from '@angular/core/testing';

import { ClienteListService } from './cliente-list.service';

describe('ClienteListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClienteListService = TestBed.get(ClienteListService);
    expect(service).toBeTruthy();
  });
});
