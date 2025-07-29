import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  skills = new FormArray<FormControl>([]);
  myform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    skills: this.skills
  });

  addSkill(){
    this.skills.push(new FormControl('', Validators.required));
  }

  onSubmit() {
    console.log('Form Submitted!', this.myform.value);
  }
}
