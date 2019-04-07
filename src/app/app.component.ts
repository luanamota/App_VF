import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { IdadePage } from '../pages/idade/idade';
import { Questionario1Page } from '../pages/questionario1/questionario1';
import { RendaPage } from '../pages/renda/renda';
import { Questionario2Page } from '../pages/questionario2/questionario2';
import { PerfilquestionarioPage } from '../pages/perfilquestionario/perfilquestionario'; 
import { AjustesPage } from '../pages/ajustes/ajustes';
import { MinhacontaPage } from '../pages/minhaconta/minhaconta';
import { DadospessoaisPage } from '../pages/dadospessoais/dadospessoais';

@Component({ 
  templateUrl: 'app.html' 
})
export class MyApp {
  rootPage:any = LoginPage; 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
