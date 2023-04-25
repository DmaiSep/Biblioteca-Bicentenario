import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AlumPreLitComponent } from './alum-pre-lit/alum-pre-lit.component';
import { LibrosComponent } from './libros.component';
import { AlumPreInfComponent } from './alum-pre-inf/alum-pre-inf.component';
import { AlumPriLitComponent } from './alum-pri-lit/alum-pri-lit.component';
import { AlumPriInfComponent } from './alum-pri-inf/alum-pri-inf.component';
import { AlumSecLitComponent } from './alum-sec-lit/alum-sec-lit.component';
import { AlumSecInfComponent } from './alum-sec-inf/alum-sec-inf.component';
import { FamInfComponent } from './fam-inf/fam-inf.component';
import { FamLitComponent } from './fam-lit/fam-lit.component';
import { DocInfComponent } from './doc-inf/doc-inf.component';
import { DocLitComponent } from './doc-lit/doc-lit.component';
const routes: Routes = [
  {
    path:'inicio', component: LibrosComponent,
    children:[
      { path:'Aluprelit', component: AlumPreLitComponent,outlet: "book"}, 
      { path:'Alupreinf', component: AlumPreInfComponent,outlet: "book"},
      { path:'Aluprilit', component: AlumPriLitComponent,outlet: "book"},
      { path:'Alupriinf', component: AlumPriInfComponent,outlet: "book"},
      { path:'Aluseclit', component: AlumSecLitComponent,outlet: "book"},
      { path:'Alusecinf', component: AlumSecInfComponent,outlet: "book"}, 
      { path:'Faminf', component: FamInfComponent,outlet: "book"},
      { path:'Famlit', component: FamLitComponent,outlet: "book"},
      { path:'Docinf', component: DocInfComponent,outlet: "book"},
      { path:'Doclit', component: DocLitComponent,outlet: "book"}, 
    ]
  
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
