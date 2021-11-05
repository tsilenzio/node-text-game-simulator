const Enemy = require('./Enemy').Enemy;

class Elite extends Enemy {
    constructor(name, health = 50, damage = [5, 10]) {
        super(name, health, damage, 'Elite');
        this.spawn();
    }

    spawn() {
        console.log(`${this.toString()} spawned`);
    }
}

module.exports = { Elite };
