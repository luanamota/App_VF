import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Objetivopt7Page } from '../objetivopt7/objetivopt7';

/**
 * Generated class for the Objetivopt6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-objetivopt6',
  templateUrl: 'objetivopt6.html',
})
export class Objetivopt6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Objetivopt6Page');
  }

  goPro(){
    this.navCtrl.push(Objetivopt7Page);
  }

}
