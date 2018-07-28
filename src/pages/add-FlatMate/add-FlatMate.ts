import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, Popover } from 'ionic-angular';

/**
 * Generated class for the AddFlatMatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-FlatMate',
  templateUrl: 'add-FlatMate.html',
})
export class AddFlatMatePage {

  FlatMate:Item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.FlatMate=navParams.get("FlatMate");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFlatMatePage');
  }

}
