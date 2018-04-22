import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AedesPage } from '../aedes/aedes';
import { FormLiraProvider, VisitInformation } from '../../providers/form-lira/form-lira';

/**
 * Generated class for the ImovelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imovel',
  templateUrl: 'imovel.html',
})
export class ImovelPage {

  /// Variáveis que irão armazenar os valores preenchidos pelo usuário
  visitInformation: VisitInformation;


  constructor(public navCtrl: NavController, public navParams: NavParams, private formLiraProvider: FormLiraProvider) {

    // Recebendo o objeto passado como parâmetro.
    this.visitInformation = this.navParams.get("parameter");
  }


  // Chamando a tela de aedes e passado o objeto visitInformation como parâmetro.

  GotoAedesPage(visitParams: VisitInformation) {
    // Passando o objeto visitInformation para próxima página.
    this.navCtrl.push(AedesPage, { visitParams });
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImovelPage');
  }

}
