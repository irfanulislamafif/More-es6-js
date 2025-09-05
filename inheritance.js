class Animal {
  constructor(name, age) {
  this.name = name;
  this.age = age;
  }
}

class Dog extends Animal {
  constructor(name, breed, age) {
   super(name, age)
    this.breed = breed;
  
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  bark() {
    console.log(`${this.name} is barking`);
  }
}
class Cat {
  constructor(name, color, age) {
  super(name, age);
    this.color = color;
    
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  meow() {
    console.log(`${this.name} is mewing`);
  }
}
class Bird {
  constructor(name, species, age) {
  super(name, age)
    this.species = species;
   
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  fly() {
    console.log(`${this.name} is flying`);
  }
}

const dog1 = new Dog("Coffee", "Deshi", 1);
console.log(dog1);
dog1.eat();

const cat1 = new Cat("SP", "white", 5);
cat1.eat();

const bird1 = new Bird("Kokil", "deshi", 2);
bird1.fly();
