"use strict"

// Level 1 - Start
class Animal {
  constructor(property = {}){
    this._name = property["name"];
    this._age = 0;
    this._max_age = 10;
  }
  get name(){ return this._name; }
  set name(value){ this._name = value; }
  get age(){ return this._age; }
  set age(value){ this._age = value; }
  get max_age(){ return this._max_age; }
  set max_age(value){ this._max_age = value; }
}
// Level 1 - End

// Level 2 - Start
class Mamal extends Animal{
  constructor(property = {}){
    super(property);
  }
}
class Amphibian extends Animal{
  constructor(property = {}){
    super(property);
  }
}
// Level 2 - End

// Level 3 - Start
class Primate extends Mamal{
  constructor(property = {}){
    super(property);
  }
}
class Reptile extends Amphibian{
  constructor(property = {}){
    super(property);
  }
}
// Level 3 - End

// Level 4 - Start
class Chimpanzee extends Primate{
  constructor(property = {}){
    super(property);
    this.max_age = 10;
  }
}
class Snake extends Reptile{
  constructor(property = {}){
    super(property);
  }
}
// Level 4 - End

// Level 5 - Start
class ChimpanzeeSuper extends Chimpanzee{
  constructor(property = {}){
    super(property);
  }
  use_laser_version(){
    console.log("Laser!!!")
  }
}
// Level 5 - End

let javanese_chimpanzee = new ChimpanzeeSuper({
      name:"Javanese Chimpanzee",
      max_age:15
    });

let sumatera_chimpanzee = new ChimpanzeeSuper({
      name:"Sumatera Chimpanzee",
      max_age:9
    });

console.log(javanese_chimpanzee.name)
console.log(javanese_chimpanzee.max_age)
javanese_chimpanzee.use_laser_version()
