/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BibliothequeService } from './bibliotheque.service';

describe('Service: Bibliotheque', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BibliothequeService]
    });
  });

  it('should ...', inject([BibliothequeService], (service: BibliothequeService) => {
    expect(service).toBeTruthy();
  }));
});
