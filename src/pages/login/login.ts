import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email : any ="";
  senha: any ="";
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goLogin(){
      console.log(this.email+ ' , ' + this.senha);
  }

  goAlert(){

      const prompt = this.alertCtrl.create({
        title: 'Recuperar Senha',
        message: "Insira seu e-mail!",
        inputs: [
          {
            name: 'email',
            placeholder: 'E-mail'
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Enviar',
            handler: data => {
              if (data.email) {
                console.log('Enviado');
              } else {
                console.log('Nulo');
                return false;
              }
            }
          }
        ]
      });
      prompt.present();
    }

  }


