import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  @Input() inputValue:string = "";

  autoComplete(){
    
  }
}
