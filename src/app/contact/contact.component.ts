import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  @Input() inputValue: string = "";
  private debouncedApiRequest!: (...args: any[]) => void;

  ngOnInit() {
    this.debouncedApiRequest = this.debounce(this.apiRequest, 300);
  }

  autoComplete() {
    this.debouncedApiRequest(); 
  }

  apiRequest() {
    console.log('Fetching data from server for input: ' + this.inputValue);
  }

  debounce(func: (...args: any[]) => void, delay: number) {
    let timerId: any;
    return (...args: any[]) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
}
