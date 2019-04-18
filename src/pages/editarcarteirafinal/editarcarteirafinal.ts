import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditarcarteirafinalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editarcarteirafinal',
  templateUrl: 'editarcarteirafinal.html',
})
export class EditarcarteirafinalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarcarteirafinalPage');
  }

  goPro(){
    this.navCtrl.popAll();
  }
}
