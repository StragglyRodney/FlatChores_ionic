import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { PreferencesPage } from '../preferences/preferences';
import { NotificationsPage } from '../notifications/notifications';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, icon: string}>;
  firstname: String
  lastname: String
  username: String

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    
    this.items.push({
      title: 'Profile',
      icon: 'person',
    });
    this.items.push({
      title: 'Preferences',
      icon: 'paper',
    });
    this.items.push({
      title: 'Notifications',
      icon: 'notifications',
    });

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(event, {
      item: item
    });
  }

  openPage(page) {
    console.log(page)
    if(page['title'] === "Profile"){
    this.navCtrl.push(ProfilePage);
    } else if (page['title'] === "Preferences"){
      this.navCtrl.push(PreferencesPage);
    } else if (page['title'] === "Notifications"){
      this.navCtrl.push(NotificationsPage);
    } else if (page['title'] === "Logout"){
      console.log("Logout clicked")
    } 
  }

  
}
