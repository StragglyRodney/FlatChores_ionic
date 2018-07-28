import { BrowserModule, Title } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from "angularfire2/auth";

import { MyApp } from './app.component';
import { TitlePage } from '../pages/title/title';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { ProfileCreatePage } from '../pages/profile-create/profile-create';
import { RegisterPage } from "../pages/register/register";
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireDatabaseModule } from '../../node_modules/angularfire2/database';


@NgModule({
  declarations: [
    MyApp,
    TitlePage,
    HomePage,
    WelcomePage,
    ProfileCreatePage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TitlePage,
    HomePage, 
    WelcomePage,
    ProfileCreatePage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
