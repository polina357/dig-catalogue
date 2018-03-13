import { Component, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA-LMrZR2yzNSfiO4gAaC_lF4iCfYySAn0',
      authDomain: 'dig-catalogue.firebaseapp.com'
    });
  }

}
