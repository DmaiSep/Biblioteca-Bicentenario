import { Component } from '@angular/core';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { ActivatedRoute } from '@angular/router'; // Importar

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent {
  ruta : string;
  bread : any = [];
  constructor(public sidebarservice: SidebarService,  private route: ActivatedRoute) { }
  ngOnInit(): void {

    
  }
  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    
  }
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    this.route.children[0].url.subscribe(res => {
      this.ruta = res[0].path;
    });
    this.ruta
    switch(this.ruta){
      case'Aluprelit': this.bread = {perfil:'Alumno', nivel: 'Preescolar', genero:'Literario'}; break;
      case'Alupreinf': this.bread = {perfil:'Alumno', nivel: 'Preescolar', genero:'Informativo'}; break;
      case'Aluprilit': this.bread = {perfil:'Alumno', nivel: 'Primaria', genero:'Literario'}; break;
      case'Alupriinf': this.bread = {perfil:'Alumno', nivel: 'Primaria', genero:'Informativo'}; break;
      case'Aluseclit': this.bread = {perfil:'Alumno', nivel: 'Secundaria', genero:'Literario'}; break;
      case'Alusecinf': this.bread = {perfil:'Alumno', nivel: 'Secundaria', genero:'Informativo'}; break;
      case'Famlit': this.bread = {perfil:'Padre de Familia', nivel: '', genero:'Literario'}; break;
      case'Faminf': this.bread = {perfil:'Padre de Familia', nivel: '', genero:'Informativo'}; break;
      case'Doclit': this.bread = {perfil:'Docente', nivel: '', genero:'Literario'}; break;
      case'Docinf': this.bread = {perfil:'Docente', nivel: '', genero:'Informativo'}; break;
      
    }
    //console.log(this.bread);
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }
  oupen(ruta){
    self.top.location.href = ruta;
  }
}
