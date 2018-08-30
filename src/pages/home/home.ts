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
import { DisableSideMenu } from '../../CustomDecorators/disable-side-menu.decorator';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@DisableSideMenu()
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

  login(user: User) {
    // do invalid input checking now to avoid checking database unnecessarily
    if (user.email == null || user.password == null) {
      this.showToast("Login details are empty")
      return
    }
    if (!user.email.includes("@")) {
      this.showToast("Not a valid email")
      return
    }
    if (user.password.length < 5) {
      this.showToast("Not a valid password. Must be longer than 5 characters")
      return
    }

    // display loading animation
    let loading = this.loadingCtrl.create({
      content: 'Logging in...',
      dismissOnPageChange: true
    })
    loading.present()

    /*
      * log the user in and connect to the database then
      * diverts the user to the correct page based on their
      * profile status (in a flat? made their profile? done neither?)
      */
    let pageToGoTo : any
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(auth => {
      this.afDatabase.database.ref('/profile/').once('value', (snapshot) => {
        
        // default is to go to create profile
        pageToGoTo = ProfileCreatePage

        snapshot.forEach(profile => {
          // if they have a profile then go create/join a flat
          if (profile.key === auth.user.uid) {
            pageToGoTo = JoinOrCreateFlatPage;
          }
        });

      }).then(() => {
        // see if the user exists in a flat
        this.afDatabase.database.ref('/flats/').once('value', (snapshot) => {
          snapshot.forEach(snap => {
            snap.forEach(flat => {

              // if the user is the flat owner
              if (flat.val() === auth.user.uid) {
                if (pageToGoTo === JoinOrCreateFlatPage) {
                  pageToGoTo = Chores
                }
              }

              flat.forEach(flatmate => {
                flatmate.forEach(flatmateData => {

                  // if the user is in the flat
                  if (flatmateData.val() === auth.user.uid) {
                    if (pageToGoTo === JoinOrCreateFlatPage) {
                      pageToGoTo = Chores
                    }
                  }

                })
              })
            })
          })
        }).then(() => this.navCtrl.setRoot(pageToGoTo))
      })
    }).catch(err => {
      loading.dismiss().then(() => this.showToast("Invalid login details"));
    })
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

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
