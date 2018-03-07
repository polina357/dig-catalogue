import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    console.log(form);
    const email = form.value.email;
    const password = form.value.password;
    console.log(form.value.email);
    this.authService.signupUser(email, password);
  }

}
