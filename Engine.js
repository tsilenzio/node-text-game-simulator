const chalk = require("chalk");
const Entity = require('./Entities/Entity');

class Engine {
    constructor() {
        this.factions = {};
    }

    addEntity(entity) {
        if (!this.factions[entity.faction]) {
            this.factions[entity.faction] = [];
        }

        this.factions[entity.faction].push(entity);
    }

    removeEntity(entity) {
        const index = this.factions[entity.faction].indexOf(entity);
    
        this.factions[entity.faction].splice(index, 1);

        if (this.factions[entity.faction].length === 0) {
            const color = Entity.prototype.getColor(entity.faction);
            console.log(chalk.hex(color)(`All ${entity.faction} entities have been killed off!`));

            // Remove faction from game
            delete this.factions[entity.faction];
        }
    }

    getFactions() {
        return Object.keys(this.factions);
    }

    getRandomFactionName() {
        // Get factions names
        const factions = this.getFactions();
        // Return random faction
        return factions[Math.floor(Math.random() * factions.length)];
    }

    // Will get a random entity from a random faction unless a specific faction is included
    getEntity(faction) {
        if (faction === undefined) faction = this.getRandomFactionName();
        // Return a random entity chosen faction
        return this.factions[faction][Math.floor(Math.random() * this.factions[faction].length)];
    }
    
    getOpposingFactionEntity(faction) {
        let opposingFaction;

        // guarantee opposingFaction is of a different faction
        do {
            opposingFaction = this.getRandomFactionName();
        } while (faction === opposingFaction);
    
        return this.getEntity(opposingFaction);
    }

    process() {
        // Get random enity from entities array
        const entity1 = this.getEntity();
        // Get random entity from any opposing faction
        const entity2 = this.getOpposingFactionEntity(entity1.faction);
        // Now make them kiss
        entity1.shoot(entity2);

        if (entity2.health > 0) {
            return;
        }

        // Remove entity2 from game
        this.removeEntity(entity2);

        // End the game when only one faction is left
        if (this.getFactions().length === 1) {
            const color = Entity.prototype.getColor(entity1.faction);

            console.log(chalk.hex(color)(`${entity1.faction} faction has won!`));
        }
    }
}

module.exports = Engine;
