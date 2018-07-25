import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, Popover } from 'ionic-angular';

/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {

  user:Item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user=navParams.get("user");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserPage');
  }

}
