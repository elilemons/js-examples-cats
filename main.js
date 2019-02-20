class Animal {
    constructor(name) {
        this.name = name;
        this.animalHasOwnMethodInside = function () {
            return "HELLO FROM INSIDE";
        }
    }

    animalHasOwnMethodOutside() {
        return "HELLO";
    }
}

class Cat extends Animal {
    constructor(name) {
        super();
        this.name = name;
        this.type = "cat";
    }

    meow() {
        return "meowwww";
    }
}

let Rudy = new Cat("Rudy");

console.log(Rudy.meow());