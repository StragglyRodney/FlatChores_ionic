import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  
  // The user that is currently logged in
  username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.username = navParams.get('name');

    // alert when page is loaded
    let alert = this.alertCtrl.create({
      title: 'Welcome!',
      subTitle: 'Take a look around, ' + this.username,
      buttons: ['Sure!']
    });
    alert.present();
  }
}
