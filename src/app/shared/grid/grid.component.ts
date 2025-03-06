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
  filteredColumns: string[] = [];
  filteredProps: string[] = [];
  colNameToPropMapper: Map<string, string> = new Map<string, string>();

  ngOnInit(): void {
    this.constructColumnNameList();
  }

  constructColumnNameList(): void{
    Object.keys(this.gridList.at(0) as any).forEach(x => {
      this.propertyList.push(x);
      let arrCol = x.split('_');
      let firstPart = arrCol[0];
      let secPart: string = arrCol.length > 1 ? arrCol[1] : "";
      let colName: string = firstPart[0].toUpperCase() + firstPart.substring(1, firstPart.length) + secPart;
      this.columnList.push(colName);
      this.columnFilter[colName] = true;
      this.colNameToPropMapper.set(x, colName)
    })
    this.filteredColumns = this.columnList;
    this.filteredProps = this.propertyList;
  }

  openModal(): void{
    this.displayModal = !this.displayModal;
  }

  closeModal(state: boolean): void{
    if(state){
      this.displayModal = false;
    }
  }

  getFilteredValues(objFilter: any): void{
    this.columnFilter = objFilter;
    this.filteredColumns = this.columnList.filter(x => objFilter[x]);
    this.filteredProps = this.propertyList.filter(x => objFilter[this.colNameToPropMapper.get(x)!]);
  }

}
