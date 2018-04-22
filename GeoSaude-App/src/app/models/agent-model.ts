import { ScheduledLocation } from "./scheduled-location-model";

export class Agent {

    constructor(public firstName: string, public lastName: string, public schedule: ScheduledLocation[]){
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }

}
