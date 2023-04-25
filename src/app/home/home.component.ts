import {ChangeDetectorRef ,Component} from '@angular/core';
import * as $ from 'jquery';

declare var jarallax: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  

  constructor(private changeDetector: ChangeDetectorRef) {}

  setVideo() {
    jarallax(document.querySelectorAll('.jarallax-my-video'), {
      speed: 0.2,
      videoSrc: 'https://vimeo.com/groups/freehd/videos/153749650'
    });
  }


  public ngOnInit(){
    $( document ).ready(function() {
      console.log( "ready!" );
  });
  
 // this.changeDetector.detectChanges();
  this.setVideo();
  }
 

  }
  

