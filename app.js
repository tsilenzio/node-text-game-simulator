const chalk = require("chalk");
const Entity = require('./Entities/Entity');
const Human = require('./Entities/Human/Human');
const Soilder = require('./Entities/Human/Soldier');
const Spartian = require('./Entities/Human/Spartian');
const Covenant = require('./Entities/Covenant/Covenant');
const Grunt = require('./Entities/Covenant/Grunt');
const Elite = require('./Entities/Covenant/Elite');
const Hunter = require('./Entities/Covenant/Hunter');

const entities = [
    new Spartian('Masterchief', 50, [250, 250]),
    new Spartian('Locke'),
    new Soilder('Private Ryan'),
    new Soilder('Private Miller'),
    new Grunt("V'alvak"),
    new Grunt("Ka'jis"),
    new Grunt("B'zuc"),
    new Grunt("Ka'jud"),
    new Grunt("Ka'zar"),
    new Elite('Cacjuc'),
    new Elite('Kaygongon'),
    new Elite('Mazell'),
    new Hunter('Dopzoik', 1000, undefined, 'Banished'),
];


function getEntity() {
    return entities[Math.floor(Math.random() * entities.length)];
}

function getFactionEntity(faction) {
    let entity = getEntity();

    while (entity.faction !== faction) {
        entity = getEntity();
    }

    return entity;
}

function getOtherFactionEntity(faction) {
    let entity = getEntity();

    while (entity.faction === faction) {
        entity = getEntity();
    }

    return entity;
}

function removeEntity(entity) {
    const index = entities.indexOf(entity);
    
    if (index > -1) {
        entities.splice(index, 1);
    }
}

function getFactions() {
    let factions = [];

    for (let entity of entities) {
        if (!factions.includes(entity.faction)) {
            factions.push(entity.faction);
        }
    }

    return factions;
}

let factions = getFactions();

// Run the game
while (true) {
    // Get random enity from entities array
    const entity1 = getEntity();
    const entity2 = getOtherFactionEntity(entity1.faction);
    entity1.shoot(entity2);

    if (entity2.health === 0) {
        removeEntity(entity2);
    }

    const currentFactions = getFactions();

    if (currentFactions.length < factions.length) {
        // Find the faction that just got wiped out
        let deadFaction = factions.filter(x => !currentFactions.includes(x));
        // deadFaction is always an array with a single element, get the only element value
        deadFaction = deadFaction[0];
        // Get dying faction color
        const color = Entity.prototype.getColor(deadFaction);
        
        // Log the dead faction & use their color scheme
        console.log(chalk.hex(color)(`All ${deadFaction} entities have been killed off!`));

        // Update factions to reamining amount
        factions = currentFactions;
    }

    // End the game when only one faction is left
    if (factions.length === 1) {
        const winningFaction = factions[0];
        const color = Entity.prototype.getColor(winningFaction);

        console.log(chalk.hex(color)(`${winningFaction} faction has won!`));

        // Exit the game
        process.exit();
    }
}
