const Person = require('./Person').Person;

class Player extends Person {
    constructor(name, health = 100, damage = [5, 15], entityType = 'Player') {
        super(name, health, damage, entityType);
        this.spawn();
    }

    spawn() {
        console.log(`${this.toString()} spawned`);
    }
}

module.exports = { Player };
