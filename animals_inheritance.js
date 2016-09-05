"use strict"

class Animal {
	constructor() {
      this._is_alive = true;

	}
}

	class Mammal extends Animal{
    constructor(mammal){
	  super()
    this._is_gives_birth = true;
    this._is_warm_blooded = true;
    }
	}

  class SuperPowerMammal extends Mammal{
    constructor(){
    super()
    this._ability = "communal life";
    }
  }

  class Amphibian extends Animal{
    constructor(amphibian){
	  super()
    this._is_gives_birth = false;
    this._is_cold_blooded = true;
    }
	}

  class Reptile extends Animal{
    constructor(amphibian){
	  super()
    this._is_gives_birth = false;
    }
	}

  class Primate extends Mammal{
    constructor(num_legs){
	  super()
    this.num_legs = num_legs;

    }
	}

  class Frog extends Amphibian{
    constructor(num_legs) {
      super()
      this.num_legs = num_legs;
    }
  }

  class Bat extends Reptile{
    constructor(num_legs,is_cold_and_warm_blooded){
	  super()
    this.num_legs = num_legs;
    this._is_cold_and_warm_blooded = is_cold_and_warm_blooded;
    }
	}

  class Chimpanzee extends Mammal{
    constructor(num_legs){
	  super()
    this.num_legs = num_legs;
    }
	}

let kodok = new Frog (4)
let kelelawar = new Bat (2, true)
let chimp = new Chimpanzee(2)
let SuperChimpanzee = new SuperPowerMammal()
console.log(kodok);
console.log(kelelawar);
console.log(chimp);
console.log(SuperChimpanzee);







// class Lion extends Cat {
// 	constructor(name, age, strength) {
// 		super(name, age);
// 		this._strength = strength;
// 	}
// eatMammal(deer) {
// 		console.log(`${this.name} is eating ${mammal}`);
// 	}
// }
