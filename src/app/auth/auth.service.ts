import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) {}

  token: string;

  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(err => console.log(err));
  }

  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            this.token = token;
            this.redirect('/');
          });
      })
      .catch(err => console.log(err));
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(token => this.token = token);

    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }


  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.redirect('/signin');
  }

  redirect(path: string = '') {
    this.router.navigate([path]);
  }
}
