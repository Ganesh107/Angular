import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  login(){
    localStorage.setItem("accessToken", "wYsjmsIKS12#12s");
  }
  
  logout(){
    localStorage.removeItem("accessToken");
  }
}
