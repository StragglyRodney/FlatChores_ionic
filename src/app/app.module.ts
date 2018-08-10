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

import { CreateFlatPage } from '../pages/create-flat/create-flat';
import { JoinFlatPage } from '../pages/join-flat/join-flat';
import { JoinOrCreateFlatPage } from '../pages/join-or-create-flat/join-or-create-flat';
import { AddFlatMatePage} from '../pages/add-FlatMate/add-FlatMate';
import { MyAccountPage } from '../pages/my-account/my-account';
import { LogoutPage } from '../pages/logout/logout';
import { ProfilePage } from '../pages/profile/profile';
import { Chores } from '../pages/jobs/jobs';
import { ListPage } from '../pages/list/list';
import { HttpModule } from '@angular/http'


@NgModule({
  declarations: [
    MyApp,
    TitlePage,
    HomePage,
    WelcomePage,
    ProfileCreatePage,
    RegisterPage,
    CreateFlatPage,
    JoinFlatPage,
    JoinOrCreateFlatPage,
    AddFlatMatePage,
    Chores,
    ListPage,
    MyAccountPage,
    LogoutPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TitlePage,
    HomePage, 
    WelcomePage,
    ProfileCreatePage,
    RegisterPage,
    CreateFlatPage,
    JoinFlatPage,
    JoinOrCreateFlatPage,
    AddFlatMatePage,
    Chores,
    ListPage,
    MyAccountPage,
    LogoutPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
