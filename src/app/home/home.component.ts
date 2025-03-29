import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router: Router){}
  displayGrid(){
    this.router.navigateByUrl('/home/grid')
  }
}
