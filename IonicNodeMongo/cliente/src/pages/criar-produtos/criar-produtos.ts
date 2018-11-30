import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutosProvider } from '../../providers/produtos/produtos';


@IonicPage()
@Component({
  selector: 'page-criar-produtos',
  templateUrl: 'criar-produtos.html',
})
export class CriarProdutosPage {

  //------------------------------------------------------------------
  //    Atributos
  //------------------------------------------------------------------

  public formProduto: FormGroup;
  public loadingMsg;
  public resultCreate: any;

  
  //------------------------------------------------------------------
  //     Construtor
  //------------------------------------------------------------------

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public produtoServico: ProdutosProvider,
    public loading: LoadingController,
    public toastCtrl: ToastController) {

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
    console.log('ionViewDidLoad CriarProdutosPage');
  }

  criarProduto() {
    this.showLoader();

    // Fazendo a requisição
    this.produtoServico.criarProduto(this.formProduto.value)
      .then((res) => {
        this.resultCreate = res
        try {
          this.loadingMsg.dismiss();
          this.mostraMensagem(this.resultCreate.message, 2500);
          this.navCtrl.setRoot('ProdutosPage');
        } catch (err) {
          this.loadingMsg.dismiss();
          this.mostraMensagem(err.message, 2500);
        }
    })
      .catch((err) => {
        console.log('erro no then-catch:  ', err);
        // Transformando mensagem de erro em json
        let data = err.json();
        // Parando mensagem de loader
        this.loadingMsg.dismiss();
        // Mostrando mensagem de erro
        this.mostraMensagem(data.message, 2500)
      })
  }


  // Exibe o alerta na tela do aplicativo do tipo aguarde, enquanto a requisição está sendo feita.
  showLoader() {
    console.log('CHAMOU ESSE MÉTODO')
    this.loadingMsg = this.loading.create({
      content: 'Aguarde...'
    })
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
