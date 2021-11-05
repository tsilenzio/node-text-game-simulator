const chalk = require("chalk");

class Person {
    constructor(name, health = 100, damage, entityType) {
        this.name = name;
        this.health = health;
        this.damage = damage;
        this.entityType = entityType
    }

    hit(damageTaken) {
        this.health = this.health - damageTaken;

        if (this.health < 0) this.health = 0;
    }

    shoot(person) {
        const damage = Math.floor(Math.random() * (this.damage[1] - this.damage[0] + 1) + this.damage[0]);
        const preHitPerson = person.toString();

        person.hit(damage);

        console.log(`${this.toString()} ${this.name} shoots ${preHitPerson} for ${damage} damage, remaining health ${person.displayHealth()}`);

        if (person.health === 0) {
            person.died();
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
}

module.exports = { Person };
