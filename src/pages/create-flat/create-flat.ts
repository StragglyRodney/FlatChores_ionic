import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, ToastController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Flat } from '../../models/flat';
import { Chores } from '../jobs/jobs';
import { DisableSideMenu } from '../../CustomDecorators/disable-side-menu.decorator';

@IonicPage()
@Component({
  selector: 'page-create-flat',
  templateUrl: 'create-flat.html',
})


@DisableSideMenu()
@Component({
  selector: 'page-create-flat',
  templateUrl: 'create-flat.html',
})
export class CreateFlatPage {

  flatObject = {} as Flat

  items = [];

  flat = [];

  // All the users in the database. Populated in the constructor
  availableUserProfiles = []

  constructor(private toastCtrl: ToastController, private afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public loadingCtrl: LoadingController) {
    
    this.afDatabase.database.ref('/profile/').once('value', (snapshot) => {
      snapshot.forEach(snap => {
        let profile = snap.val()

        //TODO: This isn't actually updating the profiles. It's just updating them in the flat object
        // attach the uid to the profile object and push it to the list
        profile.uid = snap.key

        if (!profile.flat) {
          this.availableUserProfiles.push(profile)
        }
      });
      console.log(this.availableUserProfiles)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateFlatPage');
  }

  createFlat() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    })

    this.flatObject.flatmates = this.flat

    //REMOVE THESE TWO ANDY. Should be updated via html
    this.flatObject.name = "flat2"
    this.flatObject.jobs = ["job1", "job2"]

    //TODO: set profile.flat to this flat
    
    this.afAuth.authState.take(1).subscribe(user => {
      this.flatObject.ownerID = user.uid;
      this.afDatabase.object(`flats/${this.flatObject.name}`).set(this.flatObject)
        .then(() => this.showToast("created flat"))
        .then(() => this.navCtrl.setRoot(Chores))
    });

    for (let profile of this.availableUserProfiles) {
      profile
    }
    this.presentLoadingDefault();
  }

  addFlatMate(item) {
    let index = this.availableUserProfiles.indexOf(item);
    if (index > -1) {
      this.availableUserProfiles.splice(index, 1);
    }
    this.flat.push(item);
    this.items.length = 0;
  }

  removeFlatMate(item) {
    let index = this.flat.indexOf(item);
    if (index > -1) {
      this.flat.splice(index, 1);
    }
    this.availableUserProfiles.push(item);
    this.items.length = 0;
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.items = this.availableUserProfiles;
    //set val to the value of the ev target
    var val = ev.target.value;
    //if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        console.log(item.username)
        return (item.firstname.indexOf(val) > -1);
      })
    } else {
      this.items = [];  
    }
  }
  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

}
