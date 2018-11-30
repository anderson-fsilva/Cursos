import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlterarProdutosComponent } from '../components/alterar-produtos/alterar-produtos'
import { ProdutosProvider } from '../providers/produtos/produtos';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { Network } from '@ionic-native/network';
import { NetworkProvider } from '../providers/network/network';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlterarProdutosComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule, // Adicionando o Módulo do HTTP para poder fazer requisições no servidor
    HttpModule        // Importanto o HTTP do angular
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlterarProdutosComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProdutosProvider,
    ApiServiceProvider,
    Network,
    NetworkProvider
  ]
})
export class AppModule {}
