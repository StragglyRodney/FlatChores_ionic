import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Chores } from '../jobs/jobs';
import { storage } from 'firebase';


/**
 * Generated class for the CreateJobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-job',
  templateUrl: 'create-job.html',
})
export class CreateJobPage {

  title = "";
  description = "";
  storage: Storage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.storage = navParams.get("storage");

  }

  logForm() {
    //console.log(this.title, this.description)
    // set a key/value
    this.storage.set(this.title, this.description);
    // Or to get a key/value pair
    this.storage.get(this.title).then((val) => {
      console.log('Your Job description is', val);
    });
   // this.navCtrl.setRoot(Chores);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateJobPage');
  }

}
