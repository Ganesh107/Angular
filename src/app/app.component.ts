import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
})
export class AppComponent implements OnInit{
  userList: any;
  arrCount: Number = 0;
  
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('assets/mock.json').subscribe(
      (res: any) => {
        this.userList = res;
        this.arrCount = res.length;
      }
    );
  }
  
}
