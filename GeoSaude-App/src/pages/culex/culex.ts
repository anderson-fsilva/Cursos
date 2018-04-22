import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TratamentoPage } from '../tratamento/tratamento';

/**
 * Generated class for the CulexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-culex',
  templateUrl: 'culex.html',
})
export class CulexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CulexPage');
  }

  GotoAedesPageRunBack(){
    
        this.navCtrl.pop()
    
  }

  GotoTratamentoPage(){
    
        this.navCtrl.push(TratamentoPage)
    
  }

}
