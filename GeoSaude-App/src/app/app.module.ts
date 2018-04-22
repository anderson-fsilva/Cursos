import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';
import { ConquistasPage } from '../pages/conquistas/conquistas';
import { AtividadesPage } from '../pages/atividades/atividades';
import { MapaPage } from '../pages/mapa/mapa';
import { TabsPage } from '../pages/tabs/tabs';
import { ImovelPage } from '../pages/imovel/imovel';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MapModalPage } from '../pages/map-modal/map-modal';
import { SobrePage } from '../pages/sobre/sobre';
import { AedesPage } from '../pages/aedes/aedes';
import { CulexPage } from '../pages/culex/culex';
import { TratamentoPage } from '../pages/tratamento/tratamento';

import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { FormLiraProvider } from '../providers/form-lira/form-lira';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    PerfilPage,
    ConquistasPage,
    AtividadesPage,
    MapaPage,
    TabsPage,
    ImovelPage,
    MapModalPage,
    SobrePage,
    AedesPage,
    CulexPage,
    TratamentoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    PerfilPage,
    ConquistasPage,
    AtividadesPage,
    MapaPage,
    TabsPage,
    ImovelPage,
    MapModalPage,
    SobrePage,
    AedesPage,
    CulexPage,
    TratamentoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatePipe,
    FormLiraProvider,
  ]
})
export class AppModule {}
