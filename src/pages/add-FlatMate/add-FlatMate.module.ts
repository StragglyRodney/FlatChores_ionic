import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFlatMatePage } from './add-FlatMate';

@NgModule({
  declarations: [
    AddFlatMatePage,
  ],
  imports: [
    IonicPageModule.forChild(AddFlatMatePage),
  ],
})
export class AddFlatMatePageModule {}
