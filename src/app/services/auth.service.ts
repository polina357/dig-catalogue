import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;
  cachedRequests: Array<HttpRequest<any>> = [];

  constructor(private router: Router) { }

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
        firebase.auth().currentUser.getToken()
          .then((token: string) => {
            this.token = token;
          });
      })
      .catch(error =>
        console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getToken()
          .then((token: string) => {
            this.token = token;
          });
      })
      .catch(error =>
        console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/login']);
  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then((token: string) =>
        this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
