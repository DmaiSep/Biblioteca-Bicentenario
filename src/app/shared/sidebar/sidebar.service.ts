import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: '',
      type: 'header'
    },
    {
      title: 'Preescolar',
      icon: 'fas fa-book',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Literario',
          url:'Aluprelit'
        },
        {
          title: 'Informativo',
          url:'Alupreinf'
        },
        
      ]
    },
    {
      title: 'Primaria',
      icon: 'fas fa-edit',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Literario',
          url:'Aluprilit'
        },
        {
          title: 'Informativo',
          url:'Alupriinf'
        }
      ]
    },
    {
      title: 'Secundaria',
      icon: 'fas fa-chart-area',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'literario',
          url:'Aluseclit'
        },
        {
          title: 'Informativo',
          url:'Alusecinf'
        },
      ]
    },
    {
      title: 'Familias',
      icon: 'fas fa-list-alt',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Literario',
          url:'Famlit'
        },
        {
          title: 'Informativo',
          url:'Faminf'
        }
      ]
    },
    {
      title: 'Docentes',
      icon: 'fas fa-list-alt',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Literario',
          url:'Doclit'
        },
        {
          title: 'Informativo',
          url:'Docinf'
        }
      ]
    },
    
    {
      title: '',
      type: 'header'
    },
   /* {
      title: 'Documentation',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      badge: {
        text: 'Beta',
        class: 'badge-primary'
      },
    },*/
    /*,
    {
      title: 'Examples',
      icon: 'fa fa-folder',
      active: false,
      type: 'simple'
    }*/
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
