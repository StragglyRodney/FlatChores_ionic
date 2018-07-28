import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { AddUserPage} from '../add-user/add-user';
import { LoadingController } from 'ionic-angular';
import { DanielsPartPage } from '../daniels-part/daniels-part';

/**
 * Generated class for the CreateFlatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-flat',
  templateUrl: 'create-flat.html',
})
export class CreateFlatPage {

  items=[];
  /**
   * 
   */
  flat=[];

  listOfUsers= [
    ['John',"john@gmail.com","../../assets/imgs/images/john.png","I like to clean"], 
    ['Andy',"andy@gmail.com","../../assets/imgs/images/andy.png","I like vacuuming"],
    ['Emma',"emma@gmail.com","../../assets/imgs/images/emma.png", "I hate all chores"],
    ['Rodney',"rodney@gmail.com","../../assets/imgs/images/rodney.png", "I like coding"],
    ['Daniel',"daniel@gmail.com","../../assets/imgs/images/daniel.png", "I like coding"],
    ['George',"george@gmail.com","../../assets/imgs/images/george.png", "I like cleaning the toilet"],
    ['Louise',"louise@gmail.com","../../assets/imgs/images/louise.png", "I dont know who I am"],
    ['Sean',"sean@gmail.com","../../assets/imgs/images/sean.png", "I enjoy music"],
    ['Alex',"alex@gmail.com","../../assets/imgs/images/alex.png","me no no"],
    ['Rita',"rita@gmail.com","../../assets/imgs/images/rita.png", "life sucks"],
    ['Dirk Gently',"dirk_gently@gmail.com","../../assets/imgs/images/dirkgently.png","ya ya ya"]
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateFlatPage');
  }

  createFlat(){

      this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 3000,
        dismissOnPageChange: true
        
      }).present();
      
      this.navCtrl.push(DanielsPartPage, {
        flat:this.flat
       });

  }

  addUser(item){
    let index = this.listOfUsers.indexOf(item);
    if(index > -1){
      this.listOfUsers.splice(index, 1);
    }
    this.flat.push(item);
    this.items.length=0;
  }

  removeUser(item){
    let index = this.flat.indexOf(item);
    if(index > -1){
      this.flat.splice(index, 1);
    }
    this.listOfUsers.push(item);
    this.items.length=0;
  }

  itemSelected(item: Item) {
      const popover = this.popoverCtrl.create(AddUserPage,{
        user: item
     });
     popover.present();
  }

  getItems(ev){
    // Reset items back to all of the items
    this.items=this.listOfUsers;
    // set val to the value of the ev target
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
    this.items = this.items.filter((item) => {
       return (item[0].toLowerCase().indexOf(val.toLowerCase()) > -1);
     })
    }
    else{
     this.items=[];
   }
}


}
