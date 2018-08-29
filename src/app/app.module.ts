import { BrowserModule, Title } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injector } from '@angular/core';
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
import { CreateJobPage } from '../pages/create-job/create-job';
import { CreateFlatPage } from '../pages/create-flat/create-flat';
import { JoinFlatPage } from '../pages/join-flat/join-flat';
import { JoinOrCreateFlatPage } from '../pages/join-or-create-flat/join-or-create-flat';
import { MyAccountPage } from '../pages/my-account/my-account';
import { LogoutPage } from '../pages/logout/logout';
import { ProfilePage } from '../pages/profile/profile';
import { Chores } from '../pages/jobs/jobs';
import { ListPage } from '../pages/list/list';
import { HttpModule } from '@angular/http'
import { PreferencesPage } from '../pages/preferences/preferences';
import { NotificationsPage } from '../pages/notifications/notifications';
import { CanvasPage } from '../pages/canvas/canvas';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    CreateJobPage,
    MyApp,
    TitlePage,
    HomePage,
    WelcomePage,
    ProfileCreatePage,
    RegisterPage,
    CreateFlatPage,
    JoinFlatPage,
    JoinOrCreateFlatPage,
    Chores,
    ListPage,
    MyAccountPage,
    LogoutPage,
    ProfilePage,
    PreferencesPage,
    NotificationsPage,
    CanvasPage,

    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { swipeBackEnabled: true }),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CreateJobPage,
    MyApp,
    TitlePage,
    HomePage, 
    WelcomePage,
    ProfileCreatePage,
    RegisterPage,
    CreateFlatPage,
    JoinFlatPage,
    JoinOrCreateFlatPage,
    Chores,
    ListPage,
    MyAccountPage,
    LogoutPage,
    ProfilePage,
    PreferencesPage,
    NotificationsPage,
    CanvasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  static injector: Injector;

  constructor(injector: Injector) {    
      // Make the injector to be available in the entire module
      AppModule.injector = injector;    
  }
}
