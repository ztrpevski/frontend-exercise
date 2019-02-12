import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search/search.component';
import {NgScrollbarModule} from "ngx-scrollbar";

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
  ]
})
export class SharedModule {
}
