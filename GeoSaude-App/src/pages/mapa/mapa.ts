import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MapModalPage } from '../map-modal/map-modal';
import { GenericController } from "../../app/controllers/generic-controller";
import { ImovelPage } from '../imovel/imovel';


/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;


@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage extends GenericController{

  geocoder = new google.maps.Geocoder;

  @ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController){
    super();
  }


  openModal(latLng) {
    let mctrl = this.modalCtrl;
    this.geocodeLatLng(latLng, function(addr){
      let myModal = mctrl.create(MapModalPage, {address: addr});
      myModal.present();
    });
  }

  geocodeLatLng(input, callback) {
    let latlngStr = input.split(',', 2);
    let latlng = {lat: parseFloat(latlngStr[0].slice(1)), lng: parseFloat(latlngStr[1])};
    let result = this.geocoder.geocode({'location': latlng}, function(results, status) {
          if (status === 'OK') {
            if (results[0]) {
              callback(results[0].formatted_address);
            } else {
              console.log('No results found');
            }
          } else {
            console.log('Geocoder failed due to: ' + status);
          }
      });
    }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {

    // localização - latitude e longitude

    const location = new google.maps.LatLng(-8.05362071, -34.95265961);

    const options = {
      center: location,
      zoom: 16,
      streetViewControl: true,
      mapTypeId: 'terrain' // 'satellite' / 'hybrid

    }

    const map = new google.maps.Map(this.mapRef.nativeElement, options);

    for (let place of this.getCurrentUser().schedule) {
      let g_location = new google.maps.LatLng(place[0], place[1]);
      let visited = place[2];
      let marker = this.addMarker(g_location, map, visited);
      let self = this;
      marker.addListener('click', function (ev) {
         self.openModal(marker.getPosition().toString());
       });
    }
  }

  addMarker(position, map, visited) {
    let icon = 'http://maps.google.com/mapfiles/ms/icons/red.png';
    if(visited){
      icon = 'http://maps.google.com/mapfiles/ms/icons/blue.png';
    }
    return new google.maps.Marker({
      position,
      map,
      icon
    });
  }

}
