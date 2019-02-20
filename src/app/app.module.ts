import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CriancacomfebrePage } from '../pages/criancacomfebre/criancacomfebre';
import { ProcurarmedicoPage } from '../pages/procurarmedico/procurarmedico';
import { NiveldefebrePage } from '../pages/niveldefebre/niveldefebre';
import { RecomendacoesPage } from '../pages/recomendacoes/recomendacoes';
import { FebrePage } from '../pages/febre/febre';
import { SobrePage } from '../pages/sobre/sobre';
import { TemelevadaPage } from '../pages/temelevada/temelevada';
import { DesenvolvedoresPage } from '../pages/desenvolvedores/desenvolvedores';
import { DoencasPage } from '../pages/doencas/doencas';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DoencasPage,
    CriancacomfebrePage,
    TemelevadaPage,
    ProcurarmedicoPage,
    SobrePage,
    FebrePage,
    NiveldefebrePage,
    RecomendacoesPage,
    DesenvolvedoresPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DoencasPage,
    CriancacomfebrePage,
    TemelevadaPage,
    ProcurarmedicoPage,
    SobrePage,
    FebrePage,
    NiveldefebrePage,
    RecomendacoesPage,
    DesenvolvedoresPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
