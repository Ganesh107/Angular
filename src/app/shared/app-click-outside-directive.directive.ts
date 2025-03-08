import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appAppClickOutsideDirective]',
  standalone: false
})
export class AppClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private ele: ElementRef) { }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void{
    if(!this.ele.nativeElement.contains(event.target)){
      this.clickOutside.emit();
    }
  }
}


