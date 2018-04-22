declare var google: any;

export class GeoLocation {

    constructor(public latitude: number, public longitude: number){
    }

    getGoogleMapsFormated(){
      return new google.maps.LatLng(this.latitude, this.longitude);
    }

}
