import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Objetivopt6Page } from '../objetivopt6/objetivopt6';

/**
 * Generated class for the Objetivopt5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-objetivopt5',
  templateUrl: 'objetivopt5.html',
})
export class Objetivopt5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Objetivopt5Page');
  }

  goPro(){
    this.navCtrl.push(Objetivopt6Page);
  }
}
