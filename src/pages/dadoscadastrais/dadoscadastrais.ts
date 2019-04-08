import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadospessoaisPage } from '../dadospessoais/dadospessoais';
import { EnderecotelefonePage } from '../enderecotelefone/enderecotelefone';
import { DadosbancariosPage } from '../dadosbancarios/dadosbancarios';
import { DocumentosPage } from '../documentos/documentos';

/**
 * Generated class for the DadoscadastraisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dadoscadastrais',
  templateUrl: 'dadoscadastrais.html',
})
export class DadoscadastraisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadoscadastraisPage');
  }

  godadospessoais(){
    this.navCtrl.push(DadospessoaisPage);
  }
  goenderecotelefone(){
    this.navCtrl.push(EnderecotelefonePage); 
  }
  godadosbancarios(){
    this.navCtrl.push(DadosbancariosPage);
  }
  godocumentos(){
    this.navCtrl.push(DocumentosPage);
  }
}
