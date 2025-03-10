import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { ModalComponent } from './modal/modal.component';
import { AppClickOutsideDirective } from './app-click-outside-directive.directive';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GridComponent,
    ModalComponent,
    AppClickOutsideDirective,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GridComponent
  ]
})
export class SharedModule { }
