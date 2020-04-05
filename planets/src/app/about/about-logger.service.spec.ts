import { TestBed } from '@angular/core/testing';

import { AboutLoggerService } from './about-logger.service';

describe('AboutLoggerService', () => {
  let service: AboutLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
