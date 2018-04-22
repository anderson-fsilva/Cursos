import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ImovelPage } from '../imovel/imovel';

import { FormLiraProvider, VisitInformation } from '../../providers/form-lira/form-lira';


@IonicPage()
@Component({
  selector: 'page-atividades',
  templateUrl: 'atividades.html',
})
export class AtividadesPage {

  // Atributo que será instanciado para guardar os dados da visita até que eles sejam inserido no Storage.
  private visitInformation: VisitInformation;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formLiraProvider: FormLiraProvider, 
    private toast: ToastController) {
      // Criando um novo objeto VisitInformation
      this.visitInformation = new VisitInformation();
  }

  /*
  ionViewDidEnter() {
    this.formLiraProvider.getAll()
      .then((result) => {
        console.log(result);
        this.locales = result;
      })
  }
  */


  // Items vai conter os nomes da ruas. Isto deverá ser definido por regiões/quarterões posteriormente.
  // O supervisor deverá definir estes quarterões. Geralmente eles não irão mudar com frequência.

  items = [
    'Rua Marquês de Baipendi',
    'Rua Cirilino Afonso de Melo',
    'Rua Mario Sete',
    'Rua São Caetano',
    'Av Agamenon Magalhães',
    'Rua Guaianazes',
    'Rua Esberard',
    'Rua Pereira Passos',
    'Rua Nova',
    'Rua Projetada',
    'Rua Ledinha'
  ];


  itemSelected(item: string) {
    console.log("Selected Item", item);
  }


  // Após o clique sobre uma rua, o nome da rua será inserida no campo do objeto visitInformation.

  GotoImovelPage(item: string){    
    // Inserindo valor no objeto.
    this.visitInformation.street = item;
    
    // Chama a nova página e passa como parâmetro o objeto visitInformation.
    this.navCtrl.push(ImovelPage, { parameter: this.visitInformation });
  }
}
