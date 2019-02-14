import {TestBed} from '@angular/core/testing';

import {CategoriesService} from './categories.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: CategoriesService = TestBed.get(CategoriesService);
    expect(service).toBeTruthy();
  });
});
