import { TestBed } from '@angular/core/testing';

import { AboutService } from './about.service';
import { AboutLoggerService } from './about-logger.service';

describe('AboutService', () => {
  let service: AboutService;
  let servce:

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('add 2 numbers', () => {
  //   const about = new AboutService(new AboutLoggerService());
  //   const result = about.add(2,2);
  //   expect(result).toBe(4);
  // })

  it('add 2 numbers', () => {
    // const a = new AboutLoggerService()
    // spyOn(a, 'log');
    const a = jasmine.createSpyObj(AboutLoggerService,['log'])
    const about = new AboutService(a);
    const result = about.add(2,2);
    expect(result).toBe(4);
    expect(a.log).toHaveBeenCalledTimes(1);
  })
});
