import { Component } from '@angular/core';
import { NavController, NavParams, Nav, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CreateJobPage } from '../create-job/create-job';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html'
})
export class Chores {

  information = [];
  
  newJob = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private storage: Storage, private toastCtrl: ToastController) {
   // let localata = this.http.get('assets/information.json').map(res => res.json().items);
   // localata.subscribe(data => {
   //   this.information = data;
   // });
  }

  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }

  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;

  }

  createJob() {
    this.navCtrl.push(CreateJobPage, {
      callback: this.myCallbackFunction
    }, { animate: true, animation: "transition" });

  }

  myCallbackFunction = (_params) => {
    return new Promise((resolve, reject) => {
      this.newJob = _params;
      this.addJob();
      resolve();
    });
  }

  addJob() {
    console.log(this.information);
    this.information.forEach(element => {
      if (element['name'] == this.newJob[0]) {
        this.showToast("Job already exists!!");
      }
    });

    var job = {
      name: this.newJob[0], children: [
        {
          "name": "not assigned",
          "information": this.newJob[1],
          "due": "not set"
        }
      ]
    };

    this.information.push(job);
  }

  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
