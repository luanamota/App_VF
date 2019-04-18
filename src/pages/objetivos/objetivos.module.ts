import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObjetivosPage } from './objetivos';

@NgModule({
  declarations: [
    ObjetivosPage,
  ],
  imports: [
    IonicPageModule.forChild(ObjetivosPage),
  ],
})
export class ObjetivosPageModule {}
