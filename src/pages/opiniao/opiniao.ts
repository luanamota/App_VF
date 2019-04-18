import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the OpiniaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opiniao',
  templateUrl: 'opiniao.html',
})
export class OpiniaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpiniaoPage');
  }

  goLeave(){
    this.navCtrl.popAll();
  }
  goPrincipal(){
    this.navCtrl.push(TabsPage);
  }

}
