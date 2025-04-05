import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private http: HttpClient){}
  sendRequest(){
    this.http.get('http://test.com').subscribe(
      val => console.log(val),
    )
  }
}
