import * as firebase from 'firebase';


export class AuthService {
  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(err => console.log(err));
  }

  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }
}
