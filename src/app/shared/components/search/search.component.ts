import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoriesService} from "../../../core/services/categories.service";
import {Categories} from "../../../core/models/categories";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  public categories: Categories;
  public viewCategories: string[];
  private limitResults = 25; //limit showing results
  public categorySubscription: Subscription;

  //maybe the category service should in some parent class,
  // not to make this component too smart
  constructor(private categoryService: CategoriesService) {
  }

  ngOnInit() {
    this.categorySubscription = this.categoryService.getCategories().subscribe(categories => {
      this.updateViewCategories(categories);
    });

  }

  // lets limit the DOM what to show
  //a lot of data to the end user will not provide valuable feedback
  updateViewCategories(categories: Categories) {
    // todo add selected as a limit
    this.viewCategories = categories.data.filter((category, index) => index < this.limitResults);
  }

  //todo request more results on scroll end

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
  }

}
