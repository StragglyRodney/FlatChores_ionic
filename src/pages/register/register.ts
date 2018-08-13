import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
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

  constructor(private loadingCtrl: LoadingController, private toastCtrl: ToastController, private alertCtrl: AlertController, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  // Can simplify this to be more like the login page
  async register(user: User) {
    // prevent empty input which caused weird errors with firebase
    if (user.email == null || user.password == null) {
      this.showToast("Register details are empty")
      return
    }

    // display loading animation
    let loading = this.loadingCtrl.create({
      content: 'Registering...'
    });
    loading.present();

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
      loading.dismiss().then(() => this.navCtrl.setRoot(HomePage));
    }
    catch(e) {
      loading.dismiss().then(() => this.showToast("Invalid register details"));
    } 
  }

  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
