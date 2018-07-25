import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateGroupPage } from '../create-group/create-group';
import { JoinGroupPage } from '../join-group/join-group';
/**
 * Generated class for the JoinOrCreateGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-join-or-create-group',
  templateUrl: 'join-or-create-group.html',
})
export class JoinOrCreateGroupPage {

  username: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinOrCreateGroupPage');
  }

  createGroup() {
    this.navCtrl.push(CreateGroupPage, {
      name: this.username
    });
  }

  joinGroup() {
    this.navCtrl.push(JoinGroupPage, {
      name: this.username
    });
  }
}
