import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCwD17frRAxlkC05-KBdtaYv6rn4FsIAmA",
      authDomain: "library-management-angular-ocr.firebaseapp.com",
      databaseURL: "https://library-management-angular-ocr.firebaseio.com",
      projectId: "library-management-angular-ocr",
      storageBucket: "library-management-angular-ocr.appspot.com",
      messagingSenderId: "453962231893"
    };
    firebase.initializeApp(config);
  }
}
