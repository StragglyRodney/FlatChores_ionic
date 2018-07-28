import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateFlatPage } from '../create-flat/create-flat';
import { JoinFlatPage } from '../join-flat/join-flat';
/**
 * Generated class for the JoinOrCreateflatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-join-or-create-flat',
  templateUrl: 'join-or-create-flat.html',
})
export class JoinOrCreateFlatPage {

  username: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinOrCreateFlatPage');
  }

  createFlat() {
    this.navCtrl.push(CreateFlatPage, {
      name: this.username
    });
  }

  joinFlat() {
    this.navCtrl.push(JoinFlatPage, {
      name: this.username
    });
  }
}
