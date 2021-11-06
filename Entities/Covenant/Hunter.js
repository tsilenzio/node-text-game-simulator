const Covenant = require('./Covenant');

class Hunter extends Covenant {
    constructor(name, health = 200, damage = [15, 25], faction = 'Covenant') {
        super(name, health, damage, faction);
        this.spawn();
    }
}

module.exports = Hunter;
