import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { CreateFlatPage } from '../pages/create-flat/create-flat';
import { JoinFlatPage } from '../pages/join-flat/join-flat';
import { JoinOrCreateFlatPage } from '../pages/join-or-create-flat/join-or-create-flat';
import { AddUserPage} from '../pages/add-user/add-user';
import { DanielsPartPage } from '../pages/daniels-part/daniels-part';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    CreateFlatPage,
    JoinFlatPage,
    JoinOrCreateFlatPage,
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
    CreateFlatPage,
    JoinFlatPage,
    JoinOrCreateFlatPage,
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
