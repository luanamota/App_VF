import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListabancoPage } from './listabanco';

@NgModule({
  declarations: [
    ListabancoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListabancoPage),
  ],
})
export class ListabancoPageModule {}
