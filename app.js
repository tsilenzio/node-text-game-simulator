const chalk = require("chalk");
const Player = require('./Entities/Player').Player;
const Enemy = require('./Entities/Enemy/Enemy').Enemy;
const Grunt = require('./Entities/Enemy/Grunt').Grunt;
const Elite = require('./Entities/Enemy/Elite').Elite;
const Hunter = require('./Entities/Enemy/Hunter').Hunter;

const entities = [
    new Player('Masterchief', 50, [250, 250]),
    new Player('Locke'),
    new Player('Miller'),
    new Grunt('Kal-el'),
    new Grunt('Zor-el'),
    new Grunt('Zod'),
    new Elite('Butters'),
    new Elite('Cartman'),
    new Hunter('Juggernaut', 1000),
];


// Person
//   ->
//      Enemty
//        ->
//            Grunt
//            Elite
//            Hunter

// const entity = getEntity();

// entity instanceof Grunt || entity instanceof Elite || entity instanceof Hunter
// -- Same as --
// entity instanceof Enemy


function getEntity() {
    return entities[Math.floor(Math.random() * entities.length)];
}

function getPlayer() {
    let player = getEntity();

    while (player instanceof Enemy) {
        player = getEntity();
    }

    return player;
}

function getEnemy() {
    let enemy = getEntity();

    while (enemy instanceof Player) {
        enemy = getEntity();
    }

    return enemy;
}

function removeEntity(entity) {
    const index = entities.indexOf(entity);
    
    if (index > -1) {
        entities.splice(index, 1);
    }
}

function onlyPlayersLeft() {
    for (let entity of entities) {
        if (entity instanceof Enemy) return false;
    }

    return true;
}

function onlyEnemiesLeft() {
    for (let entity of entities) {
        if (entity instanceof Player) return false;
    }

    return true;
}

// Run the game
while (true) {
    // Get random enity from entities array
    const entity = getEntity();

    // If entity is player, shoot an enemy
    if (entity instanceof Player) {
        // Attempt to get an enemy from entities array
        const enemy = getEnemy();

        entity.shoot(enemy);

        // Remove enemy from game if they died
        if (enemy.health === 0) {
            removeEntity(enemy);
        }
    } else {
        const player = getPlayer();
        entity.shoot(player);

        // Remove player from game if they died
        if (player.health === 0) {
            removeEntity(player);
        }
    }

    if (onlyPlayersLeft() || onlyEnemiesLeft()) {
        if (onlyPlayersLeft()) {
            console.log(chalk.green('Players have won!'));
        } else if (onlyEnemiesLeft()) {
            console.log(chalk.red('Enemies have won!'));
        }

        process.exit();
    }
}
