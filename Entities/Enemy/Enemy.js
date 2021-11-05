const chalk = require('chalk');
const Person = require('../Person').Person;

class Enemy extends Person {
    constructor(name, health, damage, enemyType = 'Enemy') {
        super(name, health, damage, enemyType);
    }

    toString() {
        return `${chalk.magenta(`[${this.entityType}]`)} [${this.name} ${this.displayHealth()}]`;
    }
}

module.exports = { Enemy };
