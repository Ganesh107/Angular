import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
})
export class HomeComponent {
  sharedService = inject(SharedService)
  
  constructor(private http: HttpClient){}
  sendRequest(){
    this.http.get('http://test.com').subscribe(
      val => console.log(val),
    )
  }
}
