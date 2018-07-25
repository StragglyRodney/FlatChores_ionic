import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { RegisterPage } from '../register/register';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,  public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  async login(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      console.log(result)
      if (result) {
        this.navCtrl.push(WelcomePage, {
          email: user.email
        })
      }  
    }
    catch(e) {
      let alert = this.alertCtrl.create({
        title: 'You need to register first!',
        buttons: ['Ok']
      });
      alert.present();
    }
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }
}
