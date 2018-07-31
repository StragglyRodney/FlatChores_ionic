import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../models/profile';
import { WelcomePage } from '../welcome/welcome';

@IonicPage()
@Component({
  selector: 'page-profile-create',
  templateUrl: 'profile-create.html',
})
export class ProfileCreatePage {

  profile = {} as Profile

  constructor(private afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  // TODO: shouldn't be able to make profile if the user logged in already has one
  createProfile() {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
      .then(() => this.navCtrl.setRoot(WelcomePage))
    })
  }
}
