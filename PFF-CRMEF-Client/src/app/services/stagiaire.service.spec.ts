/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StagiaireService } from './stagiaire.service';

describe('Service: Stagiaire', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StagiaireService]
    });
  });

  it('should ...', inject([StagiaireService], (service: StagiaireService) => {
    expect(service).toBeTruthy();
  }));
});
