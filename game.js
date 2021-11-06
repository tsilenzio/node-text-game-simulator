const chalk = require("chalk");
const Engine = require('./Engine');
const Human = require('./Entities/Human/Human');
const Soilder = require('./Entities/Human/Soldier');
const Spartian = require('./Entities/Human/Spartian');
const Covenant = require('./Entities/Covenant/Covenant');
const Grunt = require('./Entities/Covenant/Grunt');
const Elite = require('./Entities/Covenant/Elite');
const Hunter = require('./Entities/Covenant/Hunter');

const engine = new Engine();

engine.addEntity(new Spartian('Masterchief', 50, [250, 250]));
engine.addEntity(new Spartian('Locke'));
engine.addEntity(new Soilder('Solid Snake', 50, [50, 50]));
engine.addEntity(new Soilder('Private Ryan'));
engine.addEntity(new Grunt("V'alvak"));
engine.addEntity(new Grunt("Ka'jis"));
engine.addEntity(new Grunt("B'zuc"));
engine.addEntity(new Grunt("Ka'jud"));
engine.addEntity(new Grunt("Ka'zar"));
engine.addEntity(new Grunt("Ke'lambo"));
engine.addEntity(new Grunt("Ke'lit"));
engine.addEntity(new Elite('Cacjuc'));
engine.addEntity(new Elite('Kaygongon'));
engine.addEntity(new Elite('Mazell'));
engine.addEntity(new Elite('Andzut'));
engine.addEntity(new Elite('Dopnublag'));
engine.addEntity(new Hunter('Queebertoniaveola'));

// 50% chance a hunter boss will spawn
if (Math.floor(Math.random() * (10) + 1) >= 5) {
    engine.addEntity(new Hunter('Aborg of Tepelerth', 1000, undefined, 'Banished'));
}

// 10% chance everyone is about to get fucked up
if (Math.floor(Math.random() * (10) + 1) === 10) {
    engine.addEntity(new Grunt('Broly', 1000, [100, 100], 'Broly'));
}

// Process Engine turn while there's multiple competing factions
while (engine.getFactions().length > 1) {
    engine.process();
}
