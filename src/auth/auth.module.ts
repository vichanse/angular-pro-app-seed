import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// shared modules
import { SharedModule } from './shared/shared.module';


export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule'},
      { path: 'register', loadChildren: './register/register.module#RegisterModule'}
    ]
  }
];

export const firebaseConfig: FirebaseAppConfig = {  
  apiKey: "AIzaSyDoBHBFMh9TbNaweiDiMFqb2AnSvtY1K9k",
  authDomain: "fitness-app-c53cd.firebaseapp.com",
  databaseURL: "https://fitness-app-c53cd.firebaseio.com",
  projectId: "fitness-app-c53cd",
  storageBucket: "fitness-app-c53cd.appspot.com",
  messagingSenderId: "91471004964"
};


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}