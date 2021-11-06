const chalk = require('chalk');
const Entity = require('../Entity');

class Covenant extends Entity {
    constructor(name, health, damage, faction = 'Covenant') {
        super(name, health, damage, faction);
    }
}

module.exports = Covenant;
