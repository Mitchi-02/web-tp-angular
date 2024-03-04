import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent {
  f2 = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    password: new FormControl('', [Validators.required]),
    confirmation: new FormControl('', []),
    country: new FormControl('', [Validators.required]),
    sex: new FormControl('', [Validators.required]),
    accept: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+@d.com$'),
    ]),
  });
  get username() {
    return this.f2.get('username');
  }
  get password() {
    return this.f2.get('password');
  }
  get confirmation() {
    return this.f2.get('confirmation');
  }
  get country() {
    return this.f2.get('country');
  }
  get sex() {
    return this.f2.get('sex');
  }
  get email() {
    return this.f2.get('email');
  }
  get accept() {
    return this.f2.get('accept');
  }
}
