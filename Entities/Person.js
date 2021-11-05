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

        console.log(`${this.toString()} ${this.name} shoots ${preHitPerson} for ${damage} damage, remaining health ${person.health}`);

        if (person.health === 0) {
            person.died();
        }
    }

    died() {
        console.log(`${this.toString()} died`);
    }

    toString() {
        return `[${this.entityType}] [${this.name}, ${this.health}]`;
    }
}

module.exports = { Person };
