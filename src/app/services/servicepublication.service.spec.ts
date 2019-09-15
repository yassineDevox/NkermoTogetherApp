import { TestBed } from '@angular/core/testing';

import { ServicepublicationService } from './servicepublication.service';

describe('ServicepublicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicepublicationService = TestBed.get(ServicepublicationService);
    expect(service).toBeTruthy();
  });
});
