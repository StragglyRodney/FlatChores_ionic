import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
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

  constructor(private toastCtrl: ToastController, private afAuth: AngularFireAuth, public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  async login(user: User) {
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(auth => {
      this.navCtrl.setRoot(WelcomePage, {
        email: user.email
      });
    }).catch(err => { this.showToast(err); })
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  showToast(error) {
    let toast = this.toastCtrl.create({
      message: error,
      duration: 3000
    });
    toast.present();
  }
}
