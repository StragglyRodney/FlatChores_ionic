import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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
    this.navCtrl.push(MyAccountPage, {
      item: item
    });
  }

  openPage(page) {
    this.navCtrl.push(MyAccountPage, { openTab: page.openTab });
  }
}
