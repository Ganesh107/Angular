import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  displayModal: boolean = true;
  @Input() checkBoxOptions: string[] = [];

  ngOnInit(): void {
    //console.log(this.checkBoxOptions)
  }
  showModal(){
    this.displayModal = !this.displayModal;
  }
}
