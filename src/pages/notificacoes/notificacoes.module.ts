import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificacoesPage } from './notificacoes';

@NgModule({
  declarations: [
    NotificacoesPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificacoesPage),
  ],
})
export class NotificacoesPageModule {}
