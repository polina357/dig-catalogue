import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { fromPromise } from 'rxjs/observable/fromPromise';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  cachedRequests: Array<HttpRequest<any>> = [];
  isAuth: boolean;

  constructor(private router: Router) {
    firebase.auth().onAuthStateChanged(user => {
      this.isAuth = user ? true : false;
    });
  }

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate(['/']);
      })
      .catch(error =>
        console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate(['/']);
      })
      .catch(error =>
        console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.router.navigate(['/login']);
    }).catch(error => {
      console.log(error);
    });
  }

  getToken() {
    return firebase.auth().currentUser.getIdToken();
  }

  isAuthenticated() {
    return Observable.from([this.isAuth]);
  }
}
