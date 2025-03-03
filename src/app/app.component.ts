import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
})
export class AppComponent implements OnInit{
  userList: any;
  
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('assets/mock.json').subscribe(
      res => this.userList = res
    );
  }
  
}
