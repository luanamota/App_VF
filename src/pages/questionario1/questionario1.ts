import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Questionario2Page } from '../questionario2/questionario2';
import { RendaPage } from '../renda/renda';

/**
 * Generated class for the Questionario1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questionario1',
  templateUrl: 'questionario1.html',
})
export class Questionario1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Questionario1Page');
  }

  gonext(){

    this.navCtrl.push(RendaPage);
  }
}
