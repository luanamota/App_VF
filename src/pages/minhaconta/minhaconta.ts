import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadoscadastraisPage } from '../dadoscadastrais/dadoscadastrais';

/**
 * Generated class for the MinhacontaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minhaconta',
  templateUrl: 'minhaconta.html',
})
export class MinhacontaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinhacontaPage');
  }

  godadoscadastrais(){
    this.navCtrl.push(DadoscadastraisPage);
  }

}
