import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MyAccountPage } from '../my-account/my-account';

/**
 * Generated class for the PreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html',
})
export class PreferencesPage {

  constructor(private loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferencesPage');
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
