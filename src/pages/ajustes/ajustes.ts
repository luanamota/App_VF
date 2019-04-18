import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MinhacontaPage } from '../minhaconta/minhaconta';
import { NotificacoesPage } from '../notificacoes/notificacoes';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

  gominhaconta(){
    this.navCtrl.push(MinhacontaPage);
  }

  gonotificacao(){
    this.navCtrl.push(NotificacoesPage);
  }

  gocontato(){
    this.navCtrl.push(ContactPage);
  }

}
