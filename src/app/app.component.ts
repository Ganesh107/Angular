import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})
export class AppComponent implements OnInit{
  userList: any;
  arrCount: number = 0;
  val = 0;
  
  constructor(private http: HttpClient, public sharedService: SharedService){}

  ngOnInit(): void {
    this.http.get('assets/mock.json').subscribe(
      (res: any) => {
        this.userList = res;
        this.arrCount = res.length;
      });
  }

  next(){
    this.val += 1
    this.sharedService.updateVal(this.val)
  }
}
