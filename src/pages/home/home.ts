import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { RegisterPage } from '../register/register';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { ProfileCreatePage } from '../profile-create/profile-create';
import { JoinOrCreateFlatPage } from '../join-or-create-flat/join-or-create-flat';
import { Chores } from '../jobs/jobs';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as User;

  // used for hiding/showing the password
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(private loadingCtrl: LoadingController, private afDatabase: AngularFireDatabase, private toastCtrl: ToastController, private afAuth: AngularFireAuth, public navCtrl: NavController, private alertCtrl: AlertController) {
  }

  async login(user: User) {
    // prevents empty input which caused weird errors with firebase
    if (user.email == null || user.password == null) {
      this.showToast("Login details are empty")
      return
    }

    // display loading animation
    let loading = this.loadingCtrl.create({
      content: 'Logging in...'
    });
    loading.present();

    /*
      * log the user in and connect to the database then
      * diverts the user to the correct page based on their
      * profile status (in a flat? made their profile? done neither?)
      * 
      * TODO: need to divert to the main page if they already have a flat as well.
      *       so essentially checks if the user exists in profile, and also exists
      *       in any of flat/users.
      */
    const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(auth => {
      this.afDatabase.database.ref('/profile/').once('value', (snapshot) => {
        
        let userHasProfile = false;
        snapshot.forEach(snap => {
          if (snap.key === auth.user.uid) {
            userHasProfile = true;
            // change this back to flat create
            loading.dismiss().then(() => this.navCtrl.setRoot(Chores));
          }
        });
        if (!userHasProfile) {
          loading.dismiss().then(() => this.navCtrl.setRoot(ProfileCreatePage));
        }
      });
    }).catch(err => {
      loading.dismiss().then(() => this.showToast("Invalid login details"));
    })
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  // hide and show the users password
  hideShowPassword() {
    console.log(this.passwordType)
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
