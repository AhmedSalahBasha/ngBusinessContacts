import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import {FirebaseService} from "./services/firebase.service";

export const firebaseConfig = {
  apiKey: ' AIzaSyDhs8WljhFI2ohX7LlxBasXvBUwAdnglog',
  authDomain: 'business-contacts-508cd.firebaseapp.com',
  databaseURL: 'https://business-contacts-508cd.firebaseio.com',
  storageBucket: 'business-contacts-508cd.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
