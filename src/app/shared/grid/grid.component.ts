import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  standalone: false,
  templateUrl: './grid.component.html',
})
export class GridComponent implements OnInit{
  @Input() gridList:any;
  columnList: string[] = [];
  propertyList: string[] = [];
  columnFilter:any = {};
  displayModal: boolean = false;

  ngOnInit(): void {
    this.constructColumnNameList();
    console.log(this.columnList)
  }

  constructColumnNameList(): void{
    Object.keys(this.gridList.at(0) as any).forEach(x => {
      this.columnFilter[x] = true;
      this.propertyList.push(x);
      let arrCol = x.split('_');
      let firstPart = arrCol[0];
      let secPart: string = arrCol.length > 1 ? arrCol[1] : "";
      let colName: string = firstPart[0].toUpperCase() + firstPart.substring(1, firstPart.length) + secPart;
      this.columnList.push(colName);
    })
  }

  openModal(): void{
    this.displayModal = !this.displayModal;
  }

  closeModal(state: boolean): void{
    if(state){
      this.displayModal = false;
    }
  }
  
}
