"use strict"

class Animal{

  constructor(num_legs, is_warm_blooded){
    this.num_legs = num_legs
    this.is_warm_blooded =  is_warm_blooded
  }

}

class Mammal extends Animal{
  constructor(num_legs, is_warm_blooded) {
    super(num_legs,is_warm_blooded)
  }
}

class SuperPowerMammal extends Mammal {
  use_laser_vision(){
    console.log("It can see in darkness!")
  }
}

class Amphibian extends Animal{
  constructor(num_legs, is_warm_blooded) {
    super(num_legs,is_warm_blooded)
  }

}

class Primate extends Animal{
  constructor(num_legs = 2, is_warm_blooded = true) {
    super(num_legs,is_warm_blooded)
  }

}

class Frog extends Amphibian{
  constructor(num_legs, is_warm_blooded = false) {
    super(num_legs,is_warm_blooded)
  }

}

class Bat extends Mammal{
  constructor(num_legs, is_warm_blooded = true) {
    super(num_legs,is_warm_blooded)
  }
}

class Chimpanzee extends Primate{
  constructor(num_legs, is_warm_blooded) {
    super(num_legs,is_warm_blooded)
  }
}

let monyet = new Chimpanzee()
let superMonyet = new SuperPowerMammal()

console.log(`Jumlah Kaki monyet:  ${monyet.num_legs}`)
superMonyet.use_laser_vision()
