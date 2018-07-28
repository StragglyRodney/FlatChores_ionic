import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  
  // The FlatMate that is currently logged in
  FlatMatename: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.FlatMatename = navParams.get('name');

    // alert when page is loaded
    let alert = this.alertCtrl.create({
      title: 'Welcome!',
      subTitle: 'Take a look around, ' + this.FlatMatename,
      buttons: ['Sure!']
    });
    alert.present();
  }
}
