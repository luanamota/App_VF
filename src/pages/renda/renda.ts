import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Questionario1Page } from '../questionario1/questionario1';
import { Questionario2Page } from '../questionario2/questionario2';

/**
 * Generated class for the RendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-renda',
  templateUrl: 'renda.html',
})
export class RendaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RendaPage');
  }


  goPro(){

    this.navCtrl.push(Questionario2Page);
  }
}
