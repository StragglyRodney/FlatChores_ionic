import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { JoinOrCreateFlatPage } from '../join-or-create-flat/join-or-create-flat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  FlatMatename: string;
  password: string;

  constructor(public navCtrl: NavController) {

  }

  login() {
    this.navCtrl.push(JoinOrCreateFlatPage, {
      name: this.FlatMatename
    });
  }
}
