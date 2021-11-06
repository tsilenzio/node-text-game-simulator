const Covenant = require('./Covenant');

class Grunt extends Covenant {
    constructor(name, health = 20, damage = [3, 5], faction = 'Covenant') {
        super(name, health, damage, faction);
        this.spawn();
    }
}

module.exports = Grunt;
