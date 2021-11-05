const Enemy = require('./Enemy').Enemy;

class Hunter extends Enemy {
    constructor(name, health = 150, damage = [10, 20]) {
        super(name, health, damage, 'Elite');
        this.spawn();
    }

    spawn() {
        console.log(`${this.toString()} spawned`);
    }
}

module.exports = { Hunter };
