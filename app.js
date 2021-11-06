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
engine.addEntity(new Soilder('Private Ryan'));
engine.addEntity(new Soilder('Private Miller'));
engine.addEntity(new Grunt("V'alvak"));
engine.addEntity(new Grunt("Ka'jis"));
engine.addEntity(new Grunt("B'zuc"));
engine.addEntity(new Grunt("Ka'jud"));
engine.addEntity(new Grunt("Ka'zar"));
engine.addEntity(new Elite('Cacjuc'));
engine.addEntity(new Elite('Kaygongon'));
engine.addEntity(new Elite('Mazell'));
engine.addEntity(new Hunter('Dopzoik', 1000, undefined, 'Banished'));

// Process Engine turn while there's multiple competing factions
while (engine.getFactions().length > 1) {
    engine.process();
}
