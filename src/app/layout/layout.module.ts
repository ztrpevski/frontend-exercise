import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {AppRoutingModule} from "../app-routing.module";
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [MainComponent]
})
export class LayoutModule {
}
