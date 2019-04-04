import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Questionario1Page } from '../questionario1/questionario1';

/**
 * Generated class for the IdadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-idade',
  templateUrl: 'idade.html',
})
export class IdadePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdadePage');
  }

  goPro(){

    this.navCtrl.push(Questionario1Page);
  }

}
