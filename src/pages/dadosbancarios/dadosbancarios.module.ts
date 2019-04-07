import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DadosbancariosPage } from './dadosbancarios';

@NgModule({
  declarations: [
    DadosbancariosPage,
  ],
  imports: [
    IonicPageModule.forChild(DadosbancariosPage),
  ],
})
export class DadosbancariosPageModule {}
