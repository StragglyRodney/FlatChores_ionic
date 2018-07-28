import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { AddFlatMatePage} from '../add-FlatMate/add-FlatMate';
import { LoadingController } from 'ionic-angular';

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

  listOfFlatMates= [
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
      
      this.navCtrl.push(CreateFlatPage, {
        flat:this.flat
       });

  }

  addFlatMate(item){
    let index = this.listOfFlatMates.indexOf(item);
    if(index > -1){
      this.listOfFlatMates.splice(index, 1);
    }
    this.flat.push(item);
    this.items.length=0;
  }

  removeFlatMate(item){
    let index = this.flat.indexOf(item);
    if(index > -1){
      this.flat.splice(index, 1);
    }
    this.listOfFlatMates.push(item);
    this.items.length=0;
  }

  itemSelected(item: Item) {
      const popover = this.popoverCtrl.create(AddFlatMatePage,{
        FlatMate: item
     });
     popover.present();
  }

  getItems(ev){
    // Reset items back to all of the items
    this.items=this.listOfFlatMates;
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
