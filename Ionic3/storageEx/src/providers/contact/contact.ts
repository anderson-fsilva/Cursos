
//## Neste provider ficará o CRUD (Create, Read, Update e Delete)
//
//

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable()
export class ContactProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) {    
  }


  // Create

  public insert(contact: Contact){
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, contact);
  }


  // Update

  public update(key: string, contact: Contact) {
    return this.save(key, contact);
  }


  // Salvando o contato no armazenador local

  private save(key: string, contact: Contact) {
    return this.storage.set(key, contact);
  }


  // Delete

  private remove(key: string) { 
    return this.storage.remove(key);
  }


  // Read

  public getAll() {

    let contacts: ContactsList[] = [];


    // Percorrendo cada elemento que está no storage, colocando-os em uma lista de contatos (ContactsList)

    return this.storage.forEach((value: Contact, key: string, iterationNumber: Number) => {
      let contact = new ContactsList();

      contact.key = key;
      contact.contact = value;
      
      contacts.push(contact);
    })

    .then(() => {
      return Promise.resolve(contacts);     // Promise é um objeto usado para processamento assíncrono
    })
    .catch((error) => {
      return Promise.reject(error);
    })
  }

}

export class Contact {
  nome: String;
  phone: number;
  birth: Date;
  active: boolean;
}

export class ContactsList {
  key: String;
  contact: Contact;
}