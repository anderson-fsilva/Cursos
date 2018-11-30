import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { AlertController, Events, ToastController } from 'ionic-angular';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';


export enum ConnectionStatus {
  Online,
  Offline
}



/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkProvider {

  public status: string;
  private _status: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(null);


  constructor(
    public network: Network,
    public eventCtrl: Events,
    public toast: ToastController) {

    this.status = "online";
  }

  // Inicializa evento de rede.
  public initializeNetworkEvents(): void {

    // Quando a internet for desligada.
    this.network.onDisconnect().subscribe(() => {
      if (this.status == "online") {
        this.eventCtrl.publish('network:offline');
      }
      this.status = "offline";
    });

    // Quando a internet for ligada.
    this.network.onConnect().subscribe(() => {
      if (this.status == "offline") {
        this.eventCtrl.publish('network:online');
      }
      this.status = "online";
    });

    //console.log('Subscribe to onDisconnect events');
    /* OFFLINE 
    this.network.onDisconnect().subscribe(() => {
      if (this.status === ConnectionStatus.Online) {
        //this.setStatus(ConnectionStatus.Offline);
        this.toast.create({
          message: "Rede Desconectada",
          duration: 5000
        });
      }
    });
    */

    //console.log('Subscribe to onConnect events');
    /* ONLINE 
    this.network.onConnect().subscribe(() => {
      if (this.status === ConnectionStatus.Offline) {
        //this.setStatus(ConnectionStatus.Online)
        this.toast.create({
          message: "Rede Conectada",
          duration: 5000
        });
      }
    });
    */
  }


  public getNetworkType(): string {
    return this.network.type;
  }

  /*
    public getNetworkStatus(): Observable<ConnectionStatus> {
      return this._status.asObservable();
    }
  */

  public getNetworkStatus() {
    return this.status;
  }
  /*
    private setStatus(status: ConnectionStatus) {
      this.status = status;
      this._status.next(this.status);
    }
  */
}
