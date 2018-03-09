import { Component, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { fromEvent } from 'rxjs/observable/fromEvent';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyA-LMrZR2yzNSfiO4gAaC_lF4iCfYySAn0",
      authDomain: "dig-catalogue.firebaseapp.com"
    });
  }

  logOut() {
    this.authService.logout();
  }
}
