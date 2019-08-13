import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipe-project';
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyCZWtTxYoauACmdp-daECK_HzAFYVy1YwA',
      authDomain: 'ng-recipe-book-8881f.firebaseapp.com',
    });
  }
}
