import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilquestionarioPage } from '../perfilquestionario/perfilquestionario';

/**
 * Generated class for the Questionario2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questionario2',
  templateUrl: 'questionario2.html',
})
export class Questionario2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Questionario2Page');
  }

  gonext(){
    this.navCtrl.push(PerfilquestionarioPage);
  }

}
