import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Profile } from '../../models/profile';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
/**
 *  TODO: Make this page a firt time login where you create your profile e.g
 * 
 *  username:
 *  profile pic:
 *  chore preferences:
 *  ect...
 */
export class WelcomePage {
  
  profileData: AngularFireObject<Profile>

  constructor(private toast: ToastController, private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

}
