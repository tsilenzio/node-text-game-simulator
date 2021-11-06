const Covenant = require('./Covenant');

class Elite extends Covenant {
    constructor(name, health = 50, damage = [5, 10], faction = 'Covenant') {
        super(name, health, damage, faction);
        this.spawn();
    }
}

module.exports = Elite;
