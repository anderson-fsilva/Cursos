import { GeoLocation } from "./geolocation-model";
import { Report } from "./report-model";

export class Location {

    constructor(public geolocation: GeoLocation, public reports: Report[]){

    }



}
