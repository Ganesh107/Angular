import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {
  @Input() checkBoxOptions: string[] = [];
  @Output() onModalClose: EventEmitter<boolean> = new EventEmitter<boolean>(false)
  @Input() checkBoxFilter: {} = {};
  
  ngOnInit(): void {
    //console.log(this.checkBoxOptions)
  }
  
  closeModal(): void{
    this.onModalClose.emit(true)
  }

  onSelectionChange(option: string){
    console.log(option)
  }
}
