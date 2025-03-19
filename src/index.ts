interface Animal {
  name: string;
  makeSound(): void;
}

interface Pet {
  play(): void;
}

class Cat implements Animal, Pet {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} says Meow!`);
  }

  play() {
    console.log(`${this.name} is playing with a ball!`);
  }
}

const myCat = new Cat("Whiskers");
myCat.makeSound(); // Output: Whiskers says Meow!
myCat.play(); // Output: Whiskers is playing with a ball!
