/*********************************************************************************************
  Provider FormLira

    Criado para realizar as operações de armazenamento de dados local utilizando o Storage.
    Neste provider será realizado o CRUD (Create, Read, Update e Delete) dos dados.

    Data de Criação: 25/03/2018

**********************************************************************************************/

import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable()
export class FormLiraProvider {

  constructor(private storage: Storage, private datePipe: DatePipe) {
    console.log('Hello FormularioLiraProvider Provider');
  }


  
  // Método insert insere uma nova visita  


  public insert(visitInsert: VisitInformation) {
    // Gera a chave do campo a ser inserido
    let key = this.datePipe.transform(new Date(), "ddMMyyyyHHmmss");

    // Chama o método que concretiza a inserção
    return this.save(key, visitInsert);
  }



  // Update realiza a atualização em algum campo da visita realizada


  public update() {

  }



  // Save vai realizar a inserção na estrutura do Storage


  private save(key: string, visitSave: VisitInformation) {

    return this.storage.set(key, visitSave);
  }



  public remove() {

  }



  // getAll retorna todos os objetos que estão armazenados no storage


  public getAll() {

    let places: LocaleList[] = [];

    return this.storage.forEach((value, key, iterationNumber) => {

      let loc = new LocaleList();
      loc.key = key;
      loc.visitInfo = value;

      places.push(loc);
    })
      .then(() => {
        return Promise.resolve(places);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}



/*
  Class DepositsGrams: criada para ser utilizada pela classe FormInfo, pelos atributos wdg e btiG.

  Class FormInfo: contém as informações que serão preenchidas no formulário.
*/

export class DepositsGrams {
  deposits: number;
  grams: number;
}


/* 
  Class VisitInformation: contém as informações referentes às visitas realizadas.
*/

export class VisitInformation {
  street: string;
  houseNumber: string;
  houseType: string;
  houseSituation: string;
  dateVisit: string;
  containerType: string;
  wdg: DepositsGrams;
  btiG: DepositsGrams;
  //longitude: Array<number>;
  //latitude: Array<number>;
}


/*
  Class LocateList: classe que faz a convergência entre as outras classes. Será por está classe 
                    a manipulação da estrutura de armazenamento.
*/

export class LocaleList {
  key: string;
  visitInfo: VisitInformation;
}

















  /*
    

    var streets: string[][] = [ 
      [
        'Rua Marquês de Baipendi'*/
        /*'Rua Cirilino Afonso de Melo',
        'Rua Mario Sete',
        'Rua São Caetano',
        'Av Agamenon Magalhães',
        'Rua Guaianazes',
        'Rua Esberard',
        'Rua Pereira Passos',
        'Rua Nova',
        'Rua Projetada',
        'Rua Ledinha'*/
    /*  ], 
      [
        'Nº 2059 Apartamento 101',
        'Nº 2059 Apartamento 102', 
        'Nº 2058 Apartamento 106'
      ] 
    ]
*/











/*
  Generated class for the FormularioLiraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
