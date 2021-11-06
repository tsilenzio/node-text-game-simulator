const chalk = require('chalk');
const Entity = require('../Entity');

class Human extends Entity {
    constructor(name, health = 100, damage, faction = 'Human') {
        super(name, health, damage, faction);
    }
}

module.exports = Human;
