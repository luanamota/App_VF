import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Menu } from 'ionic-angular';
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
import { DadoscadastraisPage } from '../pages/dadoscadastrais/dadoscadastrais';
import { DadospessoaisPage } from '../pages/dadospessoais/dadospessoais';
import { MinhacontaPage } from '../pages/minhaconta/minhaconta'; 
import { AjustesPage } from '../pages/ajustes/ajustes';
import { EnderecotelefonePage } from '../pages/enderecotelefone/enderecotelefone';
import { DadosbancariosPage } from '../pages/dadosbancarios/dadosbancarios';
import { ListabancoPage } from '../pages/listabanco/listabanco';
import { DocumentosPage } from '../pages/documentos/documentos';
import { MudaremailPage } from '../pages/mudaremail/mudaremail';
import { NotificacoesPage } from '../pages/notificacoes/notificacoes';
import { TrocarsenhaPage } from '../pages/trocarsenha/trocarsenha';
import { PerfildeinvestimentoPage } from '../pages/perfildeinvestimento/perfildeinvestimento';
import { ConfigurarnotificacaoPage } from '../pages/configurarnotificacao/configurarnotificacao';
import { AvaliarappPage } from '../pages/avaliarapp/avaliarapp';
import { Objetivopt1Page } from '../pages/objetivopt1/objetivopt1';
import { Objetivopt2Page } from '../pages/objetivopt2/objetivopt2';
import { Objetivopt3Page } from '../pages/objetivopt3/objetivopt3';
import { Objetivopt4Page } from '../pages/objetivopt4/objetivopt4';
import { Objetivopt5Page } from '../pages/objetivopt5/objetivopt5';
import { Objetivopt6Page } from '../pages/objetivopt6/objetivopt6';
import { Objetivopt7Page } from '../pages/objetivopt7/objetivopt7';
import { ObjetivosPage } from '../pages/objetivos/objetivos';
import { EditarcarteiraPage } from '../pages/editarcarteira/editarcarteira';
import { EditarcarteiraopcaoPage } from '../pages/editarcarteiraopcao/editarcarteiraopcao';
import { EditarcarteirafinalPage } from '../pages/editarcarteirafinal/editarcarteirafinal';
import { ReservaPage } from '../pages/reserva/reserva';
import { Reserva2Page } from '../pages/reserva2/reserva2';
import { Reserva3Page } from '../pages/reserva3/reserva3';
import { Reserva4Page } from '../pages/reserva4/reserva4';
import { Reserva5Page } from '../pages/reserva5/reserva5';

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
    OpiniaoPage,
    AjustesPage,
    DadoscadastraisPage,
    DadospessoaisPage,
    MinhacontaPage,
    EnderecotelefonePage,
    DadosbancariosPage,
    ListabancoPage,
    DocumentosPage,
    MudaremailPage,
    NotificacoesPage,
    TrocarsenhaPage,
    PerfildeinvestimentoPage,
    ConfigurarnotificacaoPage,
    AvaliarappPage,
    Objetivopt1Page,
    Objetivopt2Page,
    Objetivopt3Page,
    Objetivopt4Page,
    Objetivopt5Page,
    Objetivopt6Page,
    Objetivopt7Page,
    ObjetivosPage,
    EditarcarteiraPage,
    EditarcarteiraopcaoPage,
    EditarcarteirafinalPage,
    ReservaPage,
    Reserva2Page,
    Reserva3Page,
    Reserva4Page,
    Reserva5Page
    
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
    OpiniaoPage, 
    AjustesPage,
    DadoscadastraisPage,
    DadospessoaisPage,
    MinhacontaPage,
    EnderecotelefonePage,
    DadosbancariosPage,
    ListabancoPage,
    DocumentosPage, 
    MudaremailPage,
    NotificacoesPage,
    TrocarsenhaPage,
    PerfildeinvestimentoPage,
    ConfigurarnotificacaoPage,
    AvaliarappPage,
    Objetivopt1Page,
    Objetivopt2Page,
    Objetivopt3Page,
    Objetivopt4Page,
    Objetivopt5Page,
    Objetivopt6Page,
    Objetivopt7Page,
    ObjetivosPage,
    EditarcarteiraPage,
    EditarcarteiraopcaoPage,
    EditarcarteirafinalPage,
    ReservaPage,
    Reserva2Page,
    Reserva3Page,
    Reserva4Page,
    Reserva5Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
