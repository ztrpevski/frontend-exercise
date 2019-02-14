import {TestBed, getTestBed} from '@angular/core/testing';
import {CategoriesService} from './categories.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Categories} from "../models/categories";

describe('CategoriesService', () => {

  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: CategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    service = injector.get(CategoriesService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should be created', () => {
    const service: CategoriesService = TestBed.get(CategoriesService);
    expect(service).toBeTruthy();
  });

  describe('CategoriesService to get categories', () => {
    it('should return a list of categories', () => {
      const categoriesMock = {
        data: [
          "Young Adult",
          "Kookboeken",
          "Reisboeken",
          "Kunst, Fotografie &amp; Architectuur",
          "Psychologie",
          "Gezin &amp; Gezondheid",
          "Managementboeken",
          "Alle boeken",
          "Nederlandstalige boeken",
          "Engelstalige boeken",
        ]
      }as Categories;

      service.getCategories().subscribe(categories => {
        expect(categories).toEqual(categoriesMock);
      });

      const req = httpMock.expectOne('/services/items');
      expect(req.request.method).toBe('GET');
      req.flush(categoriesMock);
    });
  });
});
