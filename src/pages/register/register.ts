import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { WelcomePage } from '../welcome/welcome';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User; 

  constructor(private alertCtrl: AlertController, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      
      /**
       * If successfully registered then alert the user and
       * send them back to the login screen
       */
      if (result) {
        let alert = this.alertCtrl.create({
          title: 'Successfully Registered!',
          buttons: ['Ok']
        });
        alert.present();
      }
      this.navCtrl.push(HomePage)
    }
    catch(e) {
      console.error(e)
    } 
  }
}
