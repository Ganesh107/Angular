import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    GridComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridComponent
  ]
})
export class SharedModule { }
