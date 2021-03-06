import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { CanvasPage } from '../pages/canvas/canvas';
import { TitlePage } from '../pages/title/title';
import { Chores } from '../pages/jobs/jobs'; 2
import { ListPage } from '../pages/list/list';
import { MyAccountPage } from '../pages/my-account/my-account';
import { LogoutPage } from '../pages/logout/logout';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = TitlePage;

  pages: Array<{ title: string, component: any }>;

  constructor(private afAuth: AngularFireAuth, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Jobs', component: Chores },
      { title: 'List', component: ListPage },
      { title: 'My Account', component: MyAccountPage },
      { title: 'Logout', component: LogoutPage }
    ];

  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page['title'] === "Logout") {
      this.logout()
    } else {
      this.nav.setRoot(page.component)
    }
  }

  logout(){
    this.afAuth.auth.signOut().then(() => {
      this.nav.setRoot(TitlePage);
    })
    // let currentIndex = this.nav.getActive().index;
    // this.nav.setRoot(TitlePage).then(() => { this.nav.remove(currentIndex);});
  }
}


