import { Astronaut } from './Astronaut';
import{ Cargo } from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    function  sumMass(items:Payload[]): number {

        
    }

    function currentMassKg(): number (params:type) {
        
    }


}





