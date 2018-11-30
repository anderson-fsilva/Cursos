import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

  private contacts: Array<Object>;
  private media: Array<Object>;

  private contactsDb : any;
  private mediaDb : any;

  constructor(public http: Http /*, private contactStorage: Storage, private mediaStorage: Storage*/ ) {
    console.log('Hello ApiServiceProvider Provider');

    // this.contactsDb = storage.createInstance({
    //   name: "nameHere"
    // });

    this.contactsDb = new Storage({
      name: '__my_custom_db',
      storeName: '_contacts',
      driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
    });
    this.mediaDb = new Storage({
      name: '__my_custom_db',
      storeName: '_media',
      driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
    });

    this.contactsDb.get("contacts").then((result) => {
      this.contacts = result ? <Array<Object>> result : [];
      console.log("Contacts found: ", this.contacts);
    }, (error) => {
      console.log("ERROR: ", error);
    });

    this.mediaDb.get("media").then((result) => {
      this.media = result ? <Array<Object>> result : [];
      console.log("Media found: ", this.media);
    }, (error) => {
      console.log("ERROR: ", error);
    });
  }





  public getDemoContact() {

    this.contactsDb.get("contacts").then((result) => {
      this.contacts = result ? <Array<Object>> result : [];
      console.log("Contacts found: ", this.contacts);
    }, (error) => {
      console.log("ERROR: ", error);
    });

  }


  public getDemoMedia() {

    this.mediaDb.get("media").then((result) => {
      this.media = result ? <Array<Object>> result : [];
      console.log("Media found: ", this.media);
    }, (error) => {
      console.log("ERROR: ", error);
    });

  }



  public addDemoContact() {
    let contact = {
      firstname: 'Jack',
      lastname: 'Johnson',
      emails: [
        'jj@gmail.com',
        'jackjohnson@yahoo.cn'
      ],
      phones: []
    };

    this.contacts.push(contact);
    this.contactsDb.set("contacts", this.contacts);
    console.log("Saved contact to database");

    let contact2 = {
      firstname: 'Jack',
      lastname: 'Johnson',
      emails: [
        'jj@gmail.com',
        'jackjohnson@yahoo.cn'
      ],
      phones: []
    };

    this.contacts.push(contact2);
    this.contactsDb.set("contacts", this.contacts);
    console.log("Saved contact to database");
  }

  public addDemoMedia() {
    let media = {
      type: 'video',
      url: '#'
    };

    this.media.push(media);
    this.mediaDb.set("media", this.media);
    console.log("Saved media to database");
  }

}
