import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { viewClassName } from '@angular/compiler';
import { MyAccountPage } from '../my-account/my-account';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  firstname: String
  lastname: String
  username: String
  myIcon: string = "person";


  constructor(private loadingCtrl: LoadingController, private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.seeProfile()
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  seeProfile() {
    this.afDatabase.database.ref('/profile/').once('value', (snapshot) => {
      snapshot.forEach(profile => {
        if (this.afAuth.auth.currentUser.uid === profile.key) {
          console.log('Users Name: ', profile.val())
          this.firstname = profile.val()["firstname"]
          this.lastname = profile.val()["lastname"]
          this.username = profile.val()["username"]

        }
        console.log('First name:', this.firstname)
        console.log('Last name:', this.lastname)
        console.log('User name:', this.username)

      });
    })
  }

  saveClicked(){
    console.log("clicked")
    // display loading animation
    let loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'Saving....',
      duration: 500
    })
    loading.present()

    this.previousPage()
    
  }

  previousPage(){
    this.navCtrl.setRoot(MyAccountPage)
  }

}
