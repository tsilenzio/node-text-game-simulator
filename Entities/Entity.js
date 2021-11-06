const chalk = require("chalk");

class Entity {
    constructor(name, health = 100, damage, faction) {
        this.name = name;
        this.health = health;
        this.damage = damage;
        this.faction = faction
    }

    hit(damageTaken) {
        this.health = this.health - damageTaken;

        if (this.health < 0) this.health = 0;
    }

    shoot(entity) {
        const damage = Math.floor(Math.random() * (this.damage[1] - this.damage[0] + 1) + this.damage[0]);
        const entityInfoPreHit = entity.toString();

        entity.hit(damage);

        console.log(`${this.toString()} ${this.name} shoots ${entityInfoPreHit} for ${damage} damage, remaining health ${entity.displayHealth()}`);

        if (entity.health === 0) {
            entity.died();
        }
    }

    // Displays the health with colors
    displayHealth() {
        // Display as blue if undamaged
        if (this.health === this.startingHealth) {
            return chalk.blue(`${this.health}hp`);
        }

        // Display as red if less than 1/3 of life remaining
        if (this.health < this.startingHealth / 3) {
            return chalk.red(`${this.health}hp`);
        }

        // Display as orange if less than of life is remaining
        if (this.health < this.startingHealth / 2) {
            return chalk.yellow(`${this.health}hp`);
        }

        // Display as green if they have most of their life left
        return chalk.green(`${this.health}hp`);
    }

    spawn() {
        this.startingHealth = this.health;
        console.log(`${this.toString()} spawned`);
    }

    died() {
        console.log(chalk.strikethrough(`${this.toString()} died`));
    }

    // Generate random hex color (#rrggbb) so it's random but consistent for repeated strings
    getColor(string) {
        // Convert string from English to hexadecimal
        const hex = Buffer
            .from(string)
            .toString('hex')
            // Reverse the order of the hex string
            .split('')
            .reverse()
            .join('');

        // Generate colors from hex
        const red = hex.substring(0, 2);
        const green = hex.substring(2, 4);
        const blue = hex.substring(4, 6);

        return `#${red}${green}${blue}`;
    }

    // Print entity faction, name, type & hp
    toString() {
        const factionColor = this.getColor(this.faction);
        
        return `${chalk.hex(factionColor)(`[${this.faction}]`)} [${this.name} ${this.displayHealth()}]`;
    }
}

module.exports = Entity;
