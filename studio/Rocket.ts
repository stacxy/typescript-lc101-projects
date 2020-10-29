import { Astronaut } from './Astronaut';
import{ Cargo } from './Cargo';

let new astronauts = new Astronaut;
let new cargoItems = new Cargo;

class Rocket {
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
}





export class Rocket {}