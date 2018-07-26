import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DanielsPartPage } from '../daniels-part/daniels-part';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the JoinGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-join-group',
  templateUrl: 'join-group.html',
})
export class JoinGroupPage {

  /**
   * group is simply the list of group ids, this should be replaced with the real time group ids
   * within the database.
   */ 
  group = ["group1","group2","group3","group4"]

  inputValue: string = "";


  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinGroupPage');
  }

  /**
   * JoinGroup checks inputValue for exisitng groups, if there is a match the user should then be 
   * added to this group within the database before displaying the main page of the app
   * */
  joinGroup(){
      this.group.forEach(element => {
        if(element==this.inputValue){
          this.navCtrl.push(DanielsPartPage, {
          });
        }
      });
      const alert = this.alertCtrl.create({
        title: 'Group ID does not exist!',
        subTitle: 'Please enter a valid group ID, you can aquire this from the existing users within the group you are trying to join',
        buttons: ['OK']
      });
      alert.present();
  }

}
