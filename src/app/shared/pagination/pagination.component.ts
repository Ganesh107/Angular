import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: false,
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {
  @Input() totalPages: number = 0;
  @Input() currpage: number = 0;
  @Input() limit: number = 0;
  @Output() selectedPage: EventEmitter<number> = new EventEmitter<number>();

  visiblePages: number[] = [];
  startIndex: number = 0;  // 1 2 .... 10, 11 .... 20, 21 .... 30 ((currPage - 1)* 10 + 1, currPage * 10)

  ngOnInit(): void {
    this.startIndex = ((this.currpage - 1) * 10) + 1;
    this.visiblePages = Array.from({length: this.limit}, (_, i) => this.startIndex + i)
    console.log(this.visiblePages)
  }

  setPage(pageNumber: number){
    this.selectedPage.emit(pageNumber);
  }
}
