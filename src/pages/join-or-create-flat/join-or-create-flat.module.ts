import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoinOrCreateFlatPage } from './join-or-create-flat';

@NgModule({
  declarations: [
    JoinOrCreateFlatPage,
  ],
  imports: [
    IonicPageModule.forChild(JoinOrCreateFlatPage),
  ],
})
export class JoinOrCreateGroupPageModule {}
