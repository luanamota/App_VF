import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditarcarteirafinalPage } from '../editarcarteirafinal/editarcarteirafinal';

/**
 * Generated class for the EditarcarteiraopcaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editarcarteiraopcao',
  templateUrl: 'editarcarteiraopcao.html',
})
export class EditarcarteiraopcaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarcarteiraopcaoPage');
  }
  gonext(){
    this.navCtrl.push(EditarcarteirafinalPage);
  }
}
