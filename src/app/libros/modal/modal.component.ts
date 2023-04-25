import { Component } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  dat: any | null = null;
  constructor(public modalRef: MDBModalRef) {}

  ngOnInit(): void {
  console.log(this.dat);
  }

}
