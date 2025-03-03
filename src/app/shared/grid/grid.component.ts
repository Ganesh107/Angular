import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { filter, first } from 'rxjs';
import { AppComponent } from '../../app.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-grid',
  standalone: false,
  templateUrl: './grid.component.html',
})
export class GridComponent implements OnInit{
  @Input() gridList:any;
  columnList: string[] = [];
  propertyList: string[] = [];
  filteredColumns: string[] = [];
  columnFilter:any = {};
  colPropMapper: Map<string, string> = new Map();
  @ViewChild(ModalComponent) modal!: ModalComponent; 

  ngOnInit(): void {
    this.constructColumnNameList();
    this.filterColumns();
  }

  filterColumns(){
    this.filteredColumns = this.columnList.filter(x => {
      let prop: any = this.colPropMapper.get(x)
      if(this.columnFilter[prop]){
        return true
      }
      return false
    })
  }

  constructColumnNameList(){
    Object.keys(this.gridList.at(0) as any).forEach(x => {
      this.columnFilter[x] = true;
      this.propertyList.push(x);
      let arrCol = x.split('_');
      let firstPart = arrCol[0];
      let secPart: string = arrCol.length > 1 ? arrCol[1] : "";
      let colName: string = firstPart[0].toUpperCase() + firstPart.substring(1, firstPart.length) + secPart;
      this.colPropMapper.set(x, colName);
      this.colPropMapper.set(colName, x)
      this.columnList.push(colName);
    })
  }

  openModal(): void{
    this.modal.showModal();
  }
}
