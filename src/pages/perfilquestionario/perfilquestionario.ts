import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OpiniaoPage } from '../opiniao/opiniao';

/**
 * Generated class for the PerfilquestionarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfilquestionario',
  templateUrl: 'perfilquestionario.html',
})
export class PerfilquestionarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilquestionarioPage');
  }

  goPros(){

    this.navCtrl.push(OpiniaoPage);
  }

}
