const chalk = require('chalk');
const Human = require('./Human');

class Spartian extends Human {
    constructor(name, health = 125, damage = [10, 15], faction = 'Human') {
        super(name, health, damage, faction);
        this.spawn();
    }
}

module.exports = Spartian;
