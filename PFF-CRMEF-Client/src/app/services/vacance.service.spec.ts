/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VacanceService } from './vacance.service';

describe('Service: Vacance', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VacanceService]
    });
  });

  it('should ...', inject([VacanceService], (service: VacanceService) => {
    expect(service).toBeTruthy();
  }));
});
