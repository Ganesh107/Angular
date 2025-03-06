import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {
  @Input() checkBoxOptions: string[] = [];
  @Output() onModalClose: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @Input() checkBoxFilter: any;
  @Output() selectedCheckboxValues: EventEmitter<Object> = new EventEmitter<Object>(); 

  ngOnInit(): void {
    console.log(this.checkBoxFilter)
  }
  
  closeModal(): void{
    this.onModalClose.emit(true)
  }

  onSelectionChange(option: string): void{
    this.checkBoxFilter = {
      ...this.checkBoxFilter, 
      [option]: !this.checkBoxFilter[option]
    };
  }

  applyFilter(): void{
    this.selectedCheckboxValues.emit(this.checkBoxFilter);
  }
}
