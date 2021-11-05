const Enemy = require('./Enemy').Enemy;

class Grunt extends Enemy {
    constructor(name, health = 20, damage = [3, 5]) {
        super(name, health, damage, 'Grunt');
        this.spawn();
    }
}

module.exports = { Grunt };
