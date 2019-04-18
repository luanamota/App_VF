import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Objetivopt2Page } from '../objetivopt2/objetivopt2';

/**
 * Generated class for the Objetivopt1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-objetivopt1',
  templateUrl: 'objetivopt1.html',
})
export class Objetivopt1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Objetivopt1Page');
  }


  gocriar(){
    this.navCtrl.push(Objetivopt2Page);
  }
}
