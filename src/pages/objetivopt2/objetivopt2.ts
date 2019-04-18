import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Objetivopt3Page } from '../objetivopt3/objetivopt3';

/**
 * Generated class for the Objetivopt2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-objetivopt2',
  templateUrl: 'objetivopt2.html',
})
export class Objetivopt2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Objetivopt2Page');
  }

  gonext(){
    this.navCtrl.push(Objetivopt3Page);
  }

}
