import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p>{{message}}</p>`,
})
export class TestComponent {
  message = 'Initial message';

  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.message = 'Updated inside setTimeout';
      this.cdr.detectChanges();  // ✅ Manually trigger change detection
    }, 2000);
  }
}
