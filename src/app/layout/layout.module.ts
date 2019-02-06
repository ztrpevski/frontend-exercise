import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [MainComponent]
})
export class LayoutModule {
}
