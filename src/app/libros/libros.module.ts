import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { SharedModule } from '../shared/shared.module';
import { AlumPreLitComponent } from './alum-pre-lit/alum-pre-lit.component';

import { LibrosComponent } from './libros.component';
import { AlumPreInfComponent } from './alum-pre-inf/alum-pre-inf.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { ModalComponent } from './modal/modal.component';
import { AlumPriLitComponent } from './alum-pri-lit/alum-pri-lit.component';
import { AlumPriInfComponent } from './alum-pri-inf/alum-pri-inf.component';
import { AlumSecLitComponent } from './alum-sec-lit/alum-sec-lit.component';
import { AlumSecInfComponent } from './alum-sec-inf/alum-sec-inf.component';
import { FamLitComponent } from './fam-lit/fam-lit.component';
import { FamInfComponent } from './fam-inf/fam-inf.component';
import { DocInfComponent } from './doc-inf/doc-inf.component';
import { DocLitComponent } from './doc-lit/doc-lit.component';


@NgModule({
  declarations: [
  
    AlumPreLitComponent,
    LibrosComponent,
    AlumPreInfComponent,
    AlumPriLitComponent,
    AlumPriInfComponent,
    AlumSecLitComponent,
    AlumSecInfComponent,
    FamLitComponent,
    FamInfComponent,
    DocInfComponent,
    DocLitComponent,
    
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
    SharedModule,
    NgxMasonryModule

  ],
  entryComponents: [ ModalComponent ]
})
export class LibrosModule { }
