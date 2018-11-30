import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { AlterarProdutosComponent } from '../../components/alterar-produtos/alterar-produtos';
import { ProdutosProvider } from '../../providers/produtos/produtos';


@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  //------------------------------------------------------------------
  //    Atributos
  //------------------------------------------------------------------

  public produtos: any = [];


  //------------------------------------------------------------------
  //     Construtor
  //------------------------------------------------------------------

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modal: ModalController,
    public produtoServico: ProdutosProvider,
    public toastCtrl: ToastController) {
  }


  //------------------------------------------------------------------
  //    Métodos
  //------------------------------------------------------------------

  ionViewDidLoad() {
    this.trazerTodos();
  }

  trazerTodos() {
    this.produtoServico.getAllProdutos().then((result) => {
      this.produtos = result;
    });
  }

  incluir() {
    this.navCtrl.push('CriarProdutosPage')
  }

  editar(_id) {
    const AlterarProdutosModal = this.modal.create(AlterarProdutosComponent, { id: _id });
    AlterarProdutosModal.present();
  }

  deletar(id) {
    this.produtoServico.deletarProduto(id).then(() => {                                            // Quando temos um then, pode ocorrer algum problema, assim sendo, vamos usar um try-catch
      this.mostraMensagem('Produto excluído com sucesso', 3000)

      setTimeout(() => {
        this.trazerTodos();
      }, 200);

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
