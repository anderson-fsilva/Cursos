import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';     // Import para utilizar o Promise



@Injectable()
export class ProdutosProvider {

  //------------------------------------------------------------------
  //    Atributos
  //------------------------------------------------------------------

  private urlProduto;

  //------------------------------------------------------------------
  //     Construtor
  //------------------------------------------------------------------

  constructor(public http: Http) {
    console.log('Hello ProdutosProvider Provider');

    this.urlProduto = 'http://localhost:8080/produto'
  }


  //------------------------------------------------------------------
  //    Métodos
  //------------------------------------------------------------------


  criarProduto(creadential) {

    // O JSON.stringify converte tudo para string que está no Json  

    // Promise promete a entrega do que foi requerido, seja com a resolução ou com a rejeição
    return new Promise((resolve, reject) => {
      let cabecalho = new Headers();
      cabecalho.append('Content-Type', 'application/json');      // Indica o tipo de dados a serem transferidos

      // Realiza o post informando o endereço, os dados e o tipo de dados
      this.http.post(this.urlProduto, JSON.stringify(creadential), { headers: cabecalho })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);

        }, err => {
          reject(err);

        });
    });
  }



  getAllProdutos() {

    // Promise promete a entrega do que foi requerido, seja com a resolução ou com a rejeição
    return new Promise((resolve, reject) => {

      let cabecalho = new Headers();
      cabecalho.append('Content-Type', 'application/json');      // Indica o tipo de dados a serem transferidos
      // Realiza o post informando o endereço, os dados e o tipo de dados
      this.http.get(this.urlProduto, { headers: cabecalho })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })

    })
  }

  deletarProduto(id) {

    // Promise promete a entrega do que foi requerido, seja com a resolução ou com a rejeição
    return new Promise((resolve, reject) => {

      let cabecalho = new Headers();
      cabecalho.append('Content-Type', 'application/json');      // Indica o tipo de dados a serem transferidos
      // Realiza o post informando o endereço, os dados e o tipo de dados
      this.http.delete(this.urlProduto + id, { headers: cabecalho })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })

    })
  }


  alterarProduto(creadential, id) {

    // O JSON.stringify converte tudo para string que está no Json  

    // Promise promete a entrega do que foi requerido, seja com a resolução ou com a rejeição
    return new Promise((resolve, reject) => {
      let cabecalho = new Headers();
      cabecalho.append('Content-Type', 'application/json');      // Indica o tipo de dados a serem transferidos

      // Realiza o post informando o endereço, os dados e o tipo de dados
      this.http.put(this.urlProduto + id, JSON.stringify(creadential), { headers: cabecalho })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);

        }, err => {

          reject(err);

        })
    })
  }


  getOneProduto(id) {

    // Promise promete a entrega do que foi requerido, seja com a resolução ou com a rejeição
    return new Promise((resolve, reject) => {

      let cabecalho = new Headers();
      cabecalho.append('Content-Type', 'application/json');      // Indica o tipo de dados a serem transferidos
      // Realiza o post informando o endereço, os dados e o tipo de dados
      this.http.get(this.urlProduto + id, { headers: cabecalho })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })

    })
  }

} 
