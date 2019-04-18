import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reserva4Page } from '../reserva4/reserva4';

/**
 * Generated class for the Reserva3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reserva3',
  templateUrl: 'reserva3.html',
})
export class Reserva3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Reserva3Page');
  }

  goPro(){
    this.navCtrl.push(Reserva4Page);
  }

}
