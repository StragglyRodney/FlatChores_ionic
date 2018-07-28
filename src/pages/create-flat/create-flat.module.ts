import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateFlatPage } from './create-flat';

@NgModule({
  declarations: [
    CreateFlatPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateFlatPage),
  ],
})
export class CreateFlatPageModule {}
