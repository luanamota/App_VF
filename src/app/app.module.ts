import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { IdadePage } from '../pages/idade/idade';
import { Questionario1Page } from '../pages/questionario1/questionario1';
import { RendaPage } from '../pages/renda/renda';
import { Questionario2Page } from '../pages/questionario2/questionario2';
import { PerfilquestionarioPage } from '../pages/perfilquestionario/perfilquestionario';
import { OpiniaoPage } from '../pages/opiniao/opiniao';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CadastroPage,
    IdadePage,
    Questionario1Page,
    Questionario2Page,
    RendaPage,
    PerfilquestionarioPage,
    OpiniaoPage
  ], 
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
        backButtonText: '',
        tabsHideonSubPages: true

    }),
    HttpModule

  ], 
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CadastroPage,
    IdadePage,
    Questionario1Page,
    Questionario2Page,
    RendaPage,
    PerfilquestionarioPage,
    OpiniaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
