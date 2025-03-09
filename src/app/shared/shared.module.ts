import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { ModalComponent } from './modal/modal.component';
import { AppClickOutsideDirective } from './app-click-outside-directive.directive';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    GridComponent,
    ModalComponent,
    AppClickOutsideDirective,
    PaginationComponent,
  ],
  imports: [
    CommonModule
],
  exports: [
    GridComponent
  ]
})
export class SharedModule { }
