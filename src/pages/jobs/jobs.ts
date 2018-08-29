import { Component } from '@angular/core';
import { NavController, NavParams, Nav, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CreateJobPage } from '../create-job/create-job';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { AngularFireAuth } from 'angularfire2/auth/auth';
import { auth } from 'firebase';
@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html'
})
export class Chores {

  information = []
  
  newJob = "";
  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private http: Http, private storage: Storage, private toastCtrl: ToastController) {
    this.afDatabase.database.ref('/flats/flat2/jobs').once('value', (snapshot) => {
      snapshot.forEach(snap => {
        this.information.push(snap.val())
      })
    })
  
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
    console.log(this.information[0]);
    this.information.forEach(element => {
      if (element['name'] == this.newJob[0]) {
        this.showToast("Job already exists!!");
        return;
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

    // this is currently hard coded to add to flat2 but in the future it will add to the current users flat
    this.afDatabase.object(`flats/flat2/jobs/${job.name}`).set(job)
        .then(() => this.showToast("added job"))
  }

  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  seeProfile() {

    this.afDatabase.database.ref('/profile/').once('value', (snapshot) => {
      snapshot.forEach(profile => {
        if (this.afAuth.auth.currentUser.uid === profile.key) {
          console.log('Users Name: ', profile.val());
        }
      });
    })
  }


  // }).then(() => {
  //   // see if the user exists in a flat
  //   this.afDatabase.database.ref('/flats/').once('value', (snapshot) => {
  //     snapshot.forEach(snap => {
  //       snap.forEach(flat => {
  //         flat.forEach(flatmate => {
  //           flatmate.forEach(flatmateData => {
  //             if (flatmateData.val() === auth.user.uid) {
  //               // should only go to chores page if already have a profile

  //             }
  //           })
  //         })
  //       })
  //     })
  //   })
  // }
  //   , )
  //}

}
