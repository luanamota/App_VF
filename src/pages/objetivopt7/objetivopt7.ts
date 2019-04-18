import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ObjetivosPage } from '../objetivos/objetivos';

/**
 * Generated class for the Objetivopt7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-objetivopt7',
  templateUrl: 'objetivopt7.html',
})
export class Objetivopt7Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Objetivopt7Page');
  }

  goPro(){
    this.navCtrl.push(ObjetivosPage);
  }

}
