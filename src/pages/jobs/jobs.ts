import { Component } from '@angular/core';
import { NavController,  NavParams, Nav} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CreateJobPage } from '../create-job/create-job';
@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html'
})
export class Chores {
  
  information: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    // let localata = this.http.get('assets/information.json').map(res => res.json().items);
    // localata.subscribe(data => {
    //   this.information = data;
    // });
  }

  toggleSection(i){
    this.information[i].open = !this.information[i].open;
  }

  toggleItem(i, j){
    this.information[i].children[j].open = !this.information[i].children[j].open;

  }

  createJob(){
    this.navCtrl.push(CreateJobPage,{},{animate: true, animation: "transition"});
  }

}
