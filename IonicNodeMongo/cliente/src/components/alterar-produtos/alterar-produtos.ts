import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProdutosProvider } from '../../providers/produtos/produtos';

/**
 * Generated class for the AlterarProdutosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'alterar-produtos',
  templateUrl: 'alterar-produtos.html'
})
export class AlterarProdutosComponent {

  //------------------------------------------------------------------
  //    Atributos
  //------------------------------------------------------------------

  public formProduto: FormGroup;
  public loading;
  public idProduto;
  public resultGetOne: any;
  public resultEdit: any;


  //------------------------------------------------------------------
  //     Construtor
  //------------------------------------------------------------------

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public view: ViewController,
    public produtoServico: ProdutosProvider,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {

    this.formProduto = fb.group({
      nome: [null, [Validators.required]],
      quantidade: [null, [Validators.required]],
      valor: [null, [Validators.required]],
      marca: [null, [Validators.required]]
    })
  }


  //------------------------------------------------------------------
  //    Métodos
  //------------------------------------------------------------------

  ionViewDidLoad() {
    this.idProduto = this.navParams.get('id');
    this.trazProduto();
  }

  trazProduto() {
    this.produtoServico.getOneProduto(this.idProduto).then((res) => {
      this.resultGetOne = res;
      this.formProduto.setValue({
        nome: this.resultGetOne.nome,
        marca: this.resultGetOne.marca,
        valor: this.resultGetOne.valor,
        quantidade: this.resultGetOne.quantidade

      })

      this.loading.dismiss();
    })
  }


  fechaModal() {
    this.view.dismiss();
  }

  alterarProduto() {
    this.showLoader();
    this.produtoServico.alterarProduto(this.formProduto.value, this.idProduto).then((res) => {
      this.loading.dismiss();
      this.resultEdit = res;
      this.mostraMensagem(this.resultEdit.message, 2500);
      this.navCtrl.setRoot('ProdutosPage');       // O bom de fazer o "setRoot" é que ele vai realizar o get novamente, atualizando a página com as alterações feitas
    })
  }


  // Exibe o alerta na tela do aplicativo do tipo aguarde, enquanto a requisição está sendo feita.
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Aguarde...'
    })
    this.loading.present();
  }


  // Para mostrar uma mensagem, basta informar a mensagem e/ou a duração que essa mensagem será exibida. A duração não é obrigátoria
  mostraMensagem(message: string, duration?: number) {
    let mensage = this.toastCtrl.create({
      message: message,
      duration: duration,
      showCloseButton: true,
      closeButtonText: 'OK'
    })   /// Mensagem que vai aparecer na tela, como um alerta
    mensage.present();
  }

}
