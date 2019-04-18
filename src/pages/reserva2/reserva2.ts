import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reserva3Page } from '../reserva3/reserva3';

/**
 * Generated class for the Reserva2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reserva2',
  templateUrl: 'reserva2.html',
})
export class Reserva2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Reserva2Page');
  }

  goPro(){
    this.navCtrl.push(Reserva3Page);
  }

}
