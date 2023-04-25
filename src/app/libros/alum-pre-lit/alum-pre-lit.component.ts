import { animate, style } from '@angular/animations';
import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-alum-pre-lit',
  templateUrl: './alum-pre-lit.component.html',
  styleUrls: ['./alum-pre-lit.component.scss']
})
export class AlumPreLitComponent {
  modalRef: MDBModalRef | null = null;

  constructor(private modalService: MDBModalService) {}

  openModal( id ) {

    //crear servicio para buscar datos de la id y mandarlos al modal.
    console.log(id);
    let dat = {id:'1', img: "../../assets/img/1.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez', desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."};
    this.modalRef = this.modalService.show(ModalComponent, 
      {
        data: { dat },
        backdrop: true,
        keyboard: true,
        focus: true,
        show: true,
        ignoreBackdropClick: true,
        class: 'modal-lg text-m',
        containerClass: 'center',
        animated: true
        
      });
  }
  //crear servico dat : { prefil: '1', nivel:'1' , gen: '1'}
  masonryItems = [
    {id:'1', img: "../../assets/img/1.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},
    {id:'2', img: "../../assets/img/2.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},
    {id:'3', img: "../../assets/img/3.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},
    {id:'4', img: "../../assets/img/4.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},
    {id:'5', img: "../../assets/img/5.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},
    {id:'6', img: "../../assets/img/6.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},
    {id:'7', img: "../../assets/img/7.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},
    {id:'8', img: "../../assets/img/8.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},
    {id:'9', img: "../../assets/img/9.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},
    {id:'10', img: "../../assets/img/1.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},
    {id:'12', img: "../../assets/img/2.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},
    {id:'13', img: "../../assets/img/3.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},
    {id:'14', img: "../../assets/img/4.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},
    {id:'15', img: "../../assets/img/5.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},
    {id:'16', img: "../../assets/img/6.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},
    {id:'17', img: "../../assets/img/7.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},
    {id:'18', img: "../../assets/img/8.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},
    {id:'19', img: "../../assets/img/9.jpg", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},
    {id:'23', img: "https://firebasestorage.googleapis.com/v0/b/personal-f1d7a.appspot.com/o/IMG_20201007_100532.jpg?alt=media&token=ac0b01ce-0522-4566-ae75-ade7f06b132d", title: 'Los recorridos', autor: 'Ricardo Gomez Hernandez'},

  ];
  
  
  useAnimation = true;  // true/false  default: true,  default animation options will be applied if you do not provide scrollAnimationOptions
  
  masonryOptions = {
     addStatus: 'append', // default: 'append', values from: ['append', 'prepend', 'add'], set status of adding grid items to Masonry
     transitionDuration: '0.8s', // Duration of the transition when items change position or appearance, set in a CSS time format. Default: transitionDuration: '0.4s'
     
     // More masonry options available in (https://masonry.desandro.com/options.html)
  } 
  animations = {
    show: [
      style({opacity: 0}),
      animate('400ms ease-in', style({opacity: 1})),
    ],
    hide: [
      style({opacity: '*'}),
      animate('400ms ease-in', style({opacity: 0})),
    ]
  }


  
  // Unloaded images can throw off Masonry layouts and cause item elements to overlap. imagesLoaded plugin resolves this issue. 
  
  useImagesLoaded = "true"; // default: false, use true incase if of any images to be loaded in grid items

}
