import { Component, Input } from '@angular/core';
import { debounceTime, timer } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  @Input() inputValue:string = "";

  autoComplete(){
    this.debounce(this.apiRequest, 300)()
  }

  apiRequest(){
    console.log('Fetching data from server!!!')
  }

  debounce(func: any, delay: any){
    let timerId: any;
    return (...args: any) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }
}