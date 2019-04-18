import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Objetivopt4Page } from '../objetivopt4/objetivopt4';

/**
 * Generated class for the Objetivopt3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-objetivopt3',
  templateUrl: 'objetivopt3.html',
})
export class Objetivopt3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Objetivopt3Page');
  }

  goPro(){
    this.navCtrl.push(Objetivopt4Page);
  }

}
