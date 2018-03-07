import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm, FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode: string;
  loginForm: FormGroup;
  hide = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }

  getErrorMessageForEmail() {
    return this.loginForm.get('email').hasError('required') ? 'You must enter a value' :
      this.loginForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageForPassword() {
    return this.loginForm.get('password').hasError('required') ? 'You must enter a value' :
      'Password is too short';
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    if (this.mode === 'signup') {
      this.authService.signupUser(email, password);
      return;
    }
    this.authService.signinUser(email, password);
  }

  setToSignup() {
    this.mode = 'signup';
  }

  setToSignin() {
    this.mode = 'signin';
  }

}
