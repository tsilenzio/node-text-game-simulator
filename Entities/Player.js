const chalk = require('chalk');
const Person = require('./Person').Person;

class Player extends Person {
    constructor(name, health = 100, damage = [5, 15], entityType = 'Player') {
        super(name, health, damage, entityType);
        this.spawn();
    }

    toString() {
        return `${chalk.cyan(`[${this.entityType}]`)} [${this.name} ${this.displayHealth()}]`;
    }
}

module.exports = { Player };
