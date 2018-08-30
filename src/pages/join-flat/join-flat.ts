import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { DisableSideMenu } from '../../CustomDecorators/disable-side-menu.decorator';
import { Chores } from '../jobs/jobs';
/**
 * Generated class for the JoinflatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-join-flat',
  templateUrl: 'join-flat.html',
})

@DisableSideMenu()
@Component({
  selector: 'page-join-flat',
  templateUrl: 'join-flat.html',
})
export class JoinFlatPage {

  /**
   * flat is simply the list of flat ids, this should be replaced with the real time flat ids
   * within the database.
   */ 
  flat = ["flat1","flat2","flat3","flat4"]

  inputValue: string = "";


  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public navParams: NavParams, public loadingCtrl: LoadingController) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinFlatPage');
  }

  /**
   * Joinflat checks inputValue for exisitng flats, if there is a match the FlatMate should then be 
   * added to this flat within the database before displaying the main page of the app
   * */
  joinFlat(){

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    
    loading.present();
    setTimeout(() => {
    }, 2000);

    loading.dismiss();

    var match: boolean=false;
      this.flat.forEach(element => {
        if(element==this.inputValue){
          match=true;
          this.navCtrl.setRoot(Chores);
        }
      });
      if(!match){
        this.showToast("flatID does not exit.");
    }
    else{
      //if flat is a match then navigate to the Chores homepage, this is where the database needs to be updated
    }
  }

  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
