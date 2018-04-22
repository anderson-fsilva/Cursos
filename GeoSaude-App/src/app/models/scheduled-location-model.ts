import { Location } from "./location-model";

export class ScheduledLocation {

    constructor(public location: Location, public date: Date, public cicle: string){
    }

}
