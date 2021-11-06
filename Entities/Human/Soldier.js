const chalk = require('chalk');
const Human = require('./Human');

class Soldier extends Human {
    constructor(name, health = 30, damage = [5, 10], faction = 'Human') {
        super(name, health, damage, faction);
        this.spawn();
    }
}

module.exports = Soldier;
