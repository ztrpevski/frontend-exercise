import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './components/search/search.component';
import {NgScrollbarModule} from "ngx-scrollbar";
import {CategoriesService} from "./services/categories.service";

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    NgScrollbarModule
  ],
  exports: [
    SearchComponent
  ],
  providers: [
    CategoriesService
  ]
})
export class SharedModule {
}
