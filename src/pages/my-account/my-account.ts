import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { PreferencesPage } from '../preferences/preferences';
import { NotificationsPage } from '../notifications/notifications';


@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    if(page == "Profile"){
    this.navCtrl.push(ProfilePage, { openTab: page.tabPage });
    } else if (page == "Preferences"){
      this.navCtrl.push(PreferencesPage, { openTab: page.tabPage });
    } else if (page == "Notifications"){
      this.navCtrl.push(NotificationsPage, { openTab: page.tabPage });
    } else if (page == "Logout"){
      console.log("Logout clicked")
    } 
    
    
  }
}
