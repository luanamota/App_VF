import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Objetivopt5Page } from '../objetivopt5/objetivopt5';

/**
 * Generated class for the Objetivopt4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-objetivopt4',
  templateUrl: 'objetivopt4.html',
})
export class Objetivopt4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Objetivopt4Page');
  }

  goPro(){
this.navCtrl.push(Objetivopt5Page);

}


}
