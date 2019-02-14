import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './components/search/search.component';
import {NgScrollbarModule} from "ngx-scrollbar";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    NgScrollbarModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SharedModule {
}
