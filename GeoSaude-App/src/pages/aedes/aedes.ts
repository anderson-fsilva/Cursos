import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CulexPage } from '../culex/culex';
import { VisitInformation } from '../../providers/form-lira/form-lira';


/**
 * Generated class for the AedesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aedes',
  templateUrl: 'aedes.html',
})
export class AedesPage {

  // Objeto que guarda as informações coletadas durante a visita
  visitContent: VisitInformation;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.visitContent = this.navParams.get('visitParams');   // Recebendo o parâmetro passado como argumento
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AedesPage');
  }

  GotoCulexPage(visitContent: VisitInformation){
      //console.log(visitContent.containerType);
        this.navCtrl.push(CulexPage, {visitContent})        
    
  }

  GotoHomePageRunBack(){
    
        this.navCtrl.pop()        
    
  }


}
