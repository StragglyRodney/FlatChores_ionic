import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../models/profile';
import { WelcomePage } from '../welcome/welcome';
import { Chores } from '../jobs/jobs';
import { HomePage } from '../home/home';
import { JoinOrCreateFlatPage } from '../join-or-create-flat/join-or-create-flat';

@IonicPage()
@Component({
  selector: 'page-profile-create',
  templateUrl: 'profile-create.html',
})
export class ProfileCreatePage {

  profile = {} as Profile

  constructor(private afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  createProfile() {
    this.afAuth.authState.take(1).subscribe(user => {
      this.afDatabase.object(`profile/${user.uid}`).set(this.profile)
      .then(() => this.navCtrl.setRoot(JoinOrCreateFlatPage))
    })
  }
}
