const Person = require('../Person').Person;

class Enemy extends Person {
    constructor(name, health, damage, enemyType = 'Enemy') {
        super(name, health, damage, enemyType);
    }
}

module.exports = { Enemy };
