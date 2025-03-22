import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: false,
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit, DoCheck {
  @Input() totalPages: number = 0;
  @Input() currpage: number = 0;
  @Input() limit: number = 0;
  @Output() selectedPage: EventEmitter<number> = new EventEmitter<number>();
  isPrevDisabled: boolean = true;
  isNextDisabled: boolean = false;
  visiblePages: number[] = [];

  ngDoCheck(): void {
    this.isPrevDisabled = this.visiblePages[this.visiblePages.length - 1] == this.limit;
    this.isNextDisabled = this.visiblePages[this.visiblePages.length - 1] == this.totalPages;
  }

  ngOnInit(): void {
    this.visiblePages = Array.from({length: this.limit}, (_, i) => this.currpage + i);
    console.log('re')
  }

  setPage(pageNumber: number){
    this.selectedPage.emit(pageNumber);
  }

  moveForward(): void{
    if(this.visiblePages[this.visiblePages.length - 1] != this.totalPages){
      this.currpage = this.visiblePages[this.visiblePages.length - 1] + 1;
      this.selectedPage.emit(this.currpage);
      this.visiblePages = Array.from({length: this.limit}, (_, i) => this.currpage + i);
    }
  }  

  moveBackward(): void{
    if(this.visiblePages[0] != 1){
      this.currpage = this.visiblePages[0] - this.limit;
      this.selectedPage.emit(this.currpage);
      this.visiblePages = Array.from({length: this.limit}, (_, i) => this.currpage + i);
    }
  }

}
