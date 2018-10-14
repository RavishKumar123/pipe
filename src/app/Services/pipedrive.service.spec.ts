import { TestBed, inject } from '@angular/core/testing';

import { PipedriveService } from './pipedrive.service';

describe('PipedriveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PipedriveService]
    });
  });

  it('should be created', inject([PipedriveService], (service: PipedriveService) => {
    expect(service).toBeTruthy();
  }));
});
