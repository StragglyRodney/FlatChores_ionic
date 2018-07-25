import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { JoinOrCreateGroupPage } from '../join-or-create-group/join-or-create-group';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController) {

  }

  login() {
    this.navCtrl.push(JoinOrCreateGroupPage, {
      name: this.username
    });
  }
}
