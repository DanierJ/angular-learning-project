import * as firebase from 'firebase';


export class AuthService {

  token: string;

  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(err => console.log(err));
  }

  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getIdToken()
          .then(token => this.token = token);
      })
      .catch(err => console.log(err));
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(token => this.token = token);

    return this.token;
  }
}
