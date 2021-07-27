class Plates {
    constructor() {
        this.plates = 0;
        this.usedPlates = 0;
    }



    intro() {
        if (this.plates === 0) {
            return console.log(`Hi, this restoran has no plates! Please, buy some.`);
        }
        else {
            return console.log(`Hi, this restoran has ${this.plates} plates!`);
        }

    }

    buyPlates(count) {
        this.plates += count;
        console.log(`Restoran purchased ${count} plates.`);
    }

    usePlates(count) {
        if (count <= this.plates) {
            this.plates -= count;
            this.usedPlates += count;
            return console.log(`Restoran has made some dishes for ${count} plates.`);
        }

        else {
            return console.log(`Restoran has ${this.plates} plates only, it's not enough. No action is taken.`);
        }

    }

    cleanPlatesCount() {
        if (this.plates > 0) {
            return console.log(`Restoran has ${this.plates} clean plates.`);
        }
        else {
            return console.log(`Restoran is left with no clean plates.`);
        }

    }


    cleanUp(count) {
        if (count > this.usedPlates) {
            return console.log(`Restoran does not have so many dirty plates.`);
        }
        if (count === this.usedPlates) {
            return console.log(`All plates in the Restoran are clean!`);
        }
    }
}
module.exports = Plates;