import { Component } from '@angular/core';
import { NavController, ToastController, Toast } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { NetworkProvider, ConnectionStatus } from '../../providers/network/network';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public apiTeste: ApiServiceProvider,
    public networkProvider: NetworkProvider,
    public toastCtrl: ToastController) {

  }

  obter() {
    this.apiTeste.addDemoMedia();
    this.apiTeste.addDemoContact();

    console.log("OBTENDO OS CONTATOS  ");
    this.apiTeste.getDemoContact();
    console.log("OBTENDO AS MIDIAS  ");
    this.apiTeste.getDemoMedia();
  }


  enviar() {
    if (this.networkProvider.getNetworkStatus() == "online") {
      this.toastCtrl.create({
        message: "Olha, ele está ONLINE, pode enviar os dados ao servidor!",
        duration: 5000
      }).present();

    } else {
      this.toastCtrl.create({
        message: "Olha, ele está OFFLINE, NÃO pode enviar os dados ao servidor!",
        duration: 5000
      }).present();
    }
  }


  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];


  irParaPaginaProdutos() {
    this.navCtrl.push('ProdutosPage')
  }

}
