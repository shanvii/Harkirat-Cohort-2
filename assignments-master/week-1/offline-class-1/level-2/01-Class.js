
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }

  //static function doesnt need object to  be instanciated can be called directly using class
  static type() {
    console.log("Animal");
  }

  describe() {
    console.log(this.name);
    return `${this.name} has ${this.legCount} legs`
  }
}


//class name used to call static function
Animal.type();

let dog = new Animal("Dog", 4);
console.log(dog.describe());
