import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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

  job = [];
  title="";
  description="";
  callback;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.callback = this.navParams.get("callback");
  }

  logForm() {
    this.job=[this.title,this.description];
    this.callback(this.job).then(()=>{
      this.navCtrl.pop();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateJobPage');
  }

}
