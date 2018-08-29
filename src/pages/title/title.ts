import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DisableSideMenu } from '../../CustomDecorators/disable-side-menu.decorator';
import { CanvasPage } from '../canvas/canvas';
import { Chores } from '../jobs/jobs';
import { ProfilePage } from '../profile/profile';
import { PreferencesPage } from '../preferences/preferences';

/**
 * Generated class for the TitlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-title',
  templateUrl: 'title.html',
})

@DisableSideMenu()
@Component({
    selector: 'page-title',
    templateUrl: 'title.html'
})
export class TitlePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {

  }     

  getStarted() {
    this.navCtrl.push(PreferencesPage);

  }

  
}
