import { Component, Input, OnInit } from '@angular/core';
import { faSort, faSortAsc, faSortDesc } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-grid',
  standalone: false,
  templateUrl: './grid.component.html',
})
export class GridComponent implements OnInit{
  @Input() gridList: any;
  @Input() gridCount: number = 0;
  pages: number = 0;
  limit: number = 10;
  currPage: number = 1; // ((1 - 1) * 10, 10)...((10 - 1) * 10, 100) => ((currPage - 1) * limit, currPage * limit)
  columnList: string[] = [];
  propertyList: string[] = [];
  columnFilter:any = {};
  displayModal: boolean = false; 
  filteredColumns: string[] = [];
  filteredProps: string[] = [];
  filteredGridData: any;
  colNameToPropMapper: Map<string, string> = new Map<string, string>();
  searchVal: string = '';
  filteredDataCopy: any;
  sortIcon: any;
  sortFilter: any = {};

  ngOnInit(): void {
    this.constructColumnNameList();
    this.pages = Math.ceil(this.gridCount / this.limit);
    this.filterDataBasedOnPage(1);
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
      this.colNameToPropMapper.set(x, colName);
      this.colNameToPropMapper.set(colName, x);
      this.sortFilter[colName] = {
        val: 0,
        icon: faSort
      }
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

  filterDataBasedOnPage(pageNum: number): void{
    this.filteredGridData = this.gridList.slice((pageNum - 1) * this.limit, pageNum * this.limit);
    this.filteredDataCopy = [...this.filteredGridData];
    this.currPage = pageNum;
    this.filterGridData(); //Apply search filter if search input is not empty
  }

  filterGridData(): void{
    if(this.searchVal.trim() != ""){
      const searchValLower = this.searchVal.trim().toLowerCase();
      this.filteredGridData = this.filteredDataCopy.filter((x: { first_name: string; last_name: string; 
        email: string; gender: string; birthdate: string; address: string; 
        city: string; country: string; }) => 
        x.first_name.toLowerCase().includes(searchValLower) ||
        x.last_name.toLowerCase().includes(searchValLower) ||
        x.email.toLowerCase().includes(searchValLower) ||
        x.gender.toLowerCase().includes(searchValLower) ||
        x.birthdate.toLowerCase().includes(searchValLower) ||
        x.address.toLowerCase().includes(searchValLower) ||
        x.city.toLowerCase().includes(searchValLower) ||
        x.country.toLowerCase().includes(searchValLower)
      );
    }
    else{
      this.filteredGridData = [...this.filteredDataCopy];
    }
  }

  sortGrid(colName: string): void{
    let propName: any = this.colNameToPropMapper.get(colName);    
    let newVal: number = this.sortFilter[colName].val + 1;
    this.sortFilter[colName].val = newVal;

    // Set the sort icon
    if(newVal % 3 == 0){
      this.sortFilter[colName].icon = faSort;
      this.filteredGridData = [...this.filteredDataCopy];
    }
    else if(newVal % 3 == 1){
      this.sortFilter[colName].icon = faSortAsc;
      this.filteredGridData.sort((a: any, b: any) => a[propName].localeCompare(b[propName]));
    }
    else{
      this.sortFilter[colName].icon = faSortDesc;
      this.filteredGridData.sort((a: any, b: any) => b[propName].localeCompare(a[propName]));
    }

  }

}