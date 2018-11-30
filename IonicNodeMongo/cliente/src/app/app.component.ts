import { Component, ViewChild, ApplicationRef } from '@angular/core';
import { Platform, Events, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { NetworkProvider } from '../providers/network/network';
import { Network } from '@ionic-native/network';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  private connectedToInternet;


  constructor(public events: Events, public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public networkProvider: NetworkProvider,
    public toast: ToastController,
    public network: Network,
    public applicationRef: ApplicationRef) {

    platform.ready().then(() => {

      // Inicializa os eventos para monitorar se há conexão com a internet.
      this.networkProvider.initializeNetworkEvents();

      // Offline event
      this.events.subscribe('network:offline', () => {
        alert('network:offline ==> ' + this.network.type);
      });

      // Online event
      this.events.subscribe('network:online', () => {
        alert('network:online ==> ' + this.network.type);
      });



      //this.initializeApp();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  initializeApp() {

    this.networkProvider.initializeNetworkEvents();

    
    /*
    this.networkProvider.getNetworkStatus().subscribe(data => {
      console.log('platform read', data);
      this.toast.create({
        message: data + " - Status da Rede", //' ' + this.networkProvider.getNetworkType(),
        duration: 3000,
      }).present();
    });
    */
  }

}

