import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoinOrCreateGroupPage } from './join-or-create-group';

@NgModule({
  declarations: [
    JoinOrCreateGroupPage,
  ],
  imports: [
    IonicPageModule.forChild(JoinOrCreateGroupPage),
  ],
})
export class JoinOrCreateGroupPageModule {}
