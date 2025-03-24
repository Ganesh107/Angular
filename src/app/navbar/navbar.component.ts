import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styles: [`
    a.active {
      font-weight: bold;
    }
  `]
})
export class NavbarComponent implements OnInit{
  constructor(private router: Router){ }

  ngOnInit(): void {
  }
}
