import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categoriesUrl = '/services/categories';

  constructor(private httpClient: HttpClient) {
  }

  getCategories() {
    this.httpClient.get(this.categoriesUrl);
  }
}
