import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reserva5Page } from '../reserva5/reserva5';

/**
 * Generated class for the Reserva4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reserva4',
  templateUrl: 'reserva4.html',
})
export class Reserva4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Reserva4Page');
  }

  goPro(){
    this.navCtrl.push(Reserva5Page);
  }

}
