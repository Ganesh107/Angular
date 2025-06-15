import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy{
  private sub = new Subscription();
  sharedService = inject(SharedService)
  obs = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    setInterval(() => {
      observer.next(111)
    }, 1000);
  } );

  promise = new Promise((resolve) => {
    console.log('Running...');
    resolve('Done');
  });

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.obs.toPromise().then(x => console.log('From promise:' + x))
    this.sub = this.obs.subscribe(val => console.log(val), err => console.log(err), () => console.log('done'))
  }
  
  sendRequest(){
    this.http.get('http://test.com').subscribe(
      val => console.log(val),
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
