import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
/**
 *  TODO: Make this page a firt time login where you create your profile e.g
 * 
 *  username:
 *  profile pic:
 *  chore preferences:
 *  ect...
 */
export class WelcomePage {
  
  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.email = navParams.get('email');

    // alert when page is loaded
    let alert = this.alertCtrl.create({
      title: 'Welcome!',
      subTitle: 'Take a look around, ' + this.email,
      buttons: ['Sure!']
    });
    alert.present();
  }
}
