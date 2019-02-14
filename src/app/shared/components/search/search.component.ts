import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoriesService} from "../../../core/services/categories.service";
import {Categories} from "../../../core/models/categories";
import {Subscription} from "rxjs/index";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {filter} from "rxjs/internal/operators";

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
  public routeSubscription: Subscription;
  public selectedCategories: string[];
  public filterString: string;

  //maybe the category service should in some parent class,
  // not to make this component too smart
  constructor(private categoryService: CategoriesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    //grab if already are selected categories
    this.routeSubscription = this.route.queryParams.subscribe(params => {
      this.selectedCategories = params['categories'] ? params['categories'].split(',') : [];
      // grab the categories
      this.categorySubscription = this.categoryService.getCategories().subscribe(categories => {
        this.categories = categories;
        this.filterOutSelectedCategories();
        if (this.filterString) {
          this.filterCategories();
        } else {
          this.updateViewCategories(this.categories);
        }

      });
    });
  }

  //used for the view
  filterCategories() {
    const filterString = this.filterString.toLowerCase();
    const filteredResults = this.categories.data.filter(el => el.toLowerCase().indexOf(filterString) > -1);

    this.updateViewCategories({data: filteredResults});
  }

  // filter out the selected categories
  filterOutSelectedCategories() {
    if (this.selectedCategories.length > 0) {
      this.categories.data = this.categories.data.filter(category => this.selectedCategories.indexOf(category) === -1);
    }
  }

  // lets limit the DOM what to show
  //a lot of data to the end user will not provide valuable feedback
  updateViewCategories(categories: Categories) {
    this.viewCategories = [
      ...this.selectedCategories,
      ...categories.data.filter((category, index) => index < this.limitResults)
    ];
  }

  changeStatus(category) {
    //todo check if the category actualy exists
    if (this.isSelectedCategory(category)) {
      this.selectedCategories = this.selectedCategories.filter(cat => cat !== category);
    } else {
      this.selectedCategories.push(category);
      this.filterOutSelectedCategories();
    }

    const queryParams: Params = {categories: this.selectedCategories.join(',')};

    this.router.navigate(
      ['.'],
      {
        queryParams: queryParams,
        queryParamsHandling: "merge", // remove to replace all query params by provided
      });
  }

  isSelectedCategory(category) {
    return this.selectedCategories.indexOf(category) > -1;
  }

  //todo request more results on scroll end

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
    this.routeSubscription.unsubscribe();//not necessary but good practice
  }

}
