class Explorer {
    constructor(name, username, mission) {
        this.name = name;
        this.username = username;
        this.mission = mission;
    }

    getNameAndUsername() {
        return `Explorer ${this.name}, username: ${this.username}`;
    }
}

class Viajero extends Explorer {
    constructor(name, username, mission, cycle) {
        super(name, username, mission) // "super" is used to call the parent class's constructor
        this.cycle = cycle; // We add this attribute, it's exclusive to Viajero (not Explorer)
    }

    getGeneralInfo() {
        let nameAndUsername = this.getNameAndUsername; // We call the parent class's (Explorer) method
        // nameAndUsername is a variable inside this function, we don't need to use "this" to reference it
        return `${nameAndUsername}, Ciclo ${this.cycle}`;
    }
}

const viajero = new Viajero('Carlo', 'LaunchX', 'NodeJS', 'Abril 2022');

console.log('Example 10: Overriding methods');
console.log(viajero);
console.log(viajero.getNameAndUsername()); // Using the parent class's (Explorer) method
console.log(viajero.getGeneralInfo()); // Using the child class's (Viajero) method