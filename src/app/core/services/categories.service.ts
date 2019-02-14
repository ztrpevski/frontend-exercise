import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Categories} from "../models/categories";
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
  private categoriesUrl = '/services/items';
  private categories: Categories;

  constructor(private httpClient: HttpClient) {
  }

  getCategories(): Observable<Categories> {
    return this.httpClient.get(this.categoriesUrl).pipe(
      map(response => response)
    );
  }
}
