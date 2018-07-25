import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { CreateGroupPage } from '../pages/create-group/create-group';
import { JoinGroupPage } from '../pages/join-group/join-group';
import { JoinOrCreateGroupPage } from '../pages/join-or-create-group/join-or-create-group';
import { AddUserPage} from '../pages/add-user/add-user';
import { DanielsPartPage } from '../pages/daniels-part/daniels-part';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    CreateGroupPage,
    JoinGroupPage,
    JoinOrCreateGroupPage,
    AddUserPage,
    DanielsPartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    CreateGroupPage,
    JoinGroupPage,
    JoinOrCreateGroupPage,
    AddUserPage,
    DanielsPartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
