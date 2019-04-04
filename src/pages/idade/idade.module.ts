import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdadePage } from './idade';

@NgModule({
  declarations: [
    IdadePage,
  ],
  imports: [
    IonicPageModule.forChild(IdadePage),
  ],
})
export class IdadePageModule {}
