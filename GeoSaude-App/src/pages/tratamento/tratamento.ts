import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImovelPage } from '../imovel/imovel';


/**
 * Generated class for the TratamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tratamento',
  templateUrl: 'tratamento.html',
})
export class TratamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TratamentoPage');
  }

  GotoCulexPageRunBack(){
    
        this.navCtrl.pop()        
    
  }

  GotoHomePageRunBack(){
    
        this.navCtrl.push(ImovelPage)        
    
  }

}
