import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { RegisterPage } from '../register/register';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { ProfileCreatePage } from '../profile-create/profile-create';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as User;

  constructor(private toastCtrl: ToastController, private afAuth: AngularFireAuth, public navCtrl: NavController, private alertCtrl: AlertController) {
  }

  login(user: User) {
    // prevent empty input which caused weird errors with firebase
    if (user.email == null || user.password == null) {
      this.showToast("Login details are empty")
      return
    }

    // TODO: only go to profile create page if first time login
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(auth => {
      this.navCtrl.setRoot(ProfileCreatePage);
    }).catch(err => { this.showToast("Invalid login details"); })
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
