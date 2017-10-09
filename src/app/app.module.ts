import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from '../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
var config = {
    apiKey: "AIzaSyDoBHBFMh9TbNaweiDiMFqb2AnSvtY1K9k",
    authDomain: "fitness-app-c53cd.firebaseapp.com",
    databaseURL: "https://fitness-app-c53cd.firebaseio.com",
    projectId: "fitness-app-c53cd",
    storageBucket: "fitness-app-c53cd.appspot.com",
    messagingSenderId: "91471004964"
  };
  
*/
