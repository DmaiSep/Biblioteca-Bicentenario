import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { RouterModule } from '@angular/router';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    RouterModule
  ],
  exports: [
  HeaderComponent,
  FooterComponent,
  SidebarComponent
],
providers: [
  {
   provide: PERFECT_SCROLLBAR_CONFIG,
   useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
 }
]
})
export class SharedModule { }
