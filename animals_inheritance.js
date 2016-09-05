"use strict"
class Animal{
  constructor(){
    this._isAlive = true
  }
}
class Mammal extends Animal{
  constructor(mammal){
    super()
    this._isGivesBirth = true
    this._isWarmBlooded = true
  }
}

class SuperPowerMammal extends Mammal{
  constructor(){
    super()
    this._weapon = "Otot Besar"
  }
}

class Amphibian extends Animal{
  constructor(amphibian){
    super()
    this._isGivesBirth = false
    this._isWarmBlooded = false
  }
}
class Primate extends Mammal{
  constructor(num_legs){
    super()
    this._num_legs = num_legs
  }
}
class Frog extends Amphibian{
  constructor(num_legs){
    super()
    this._num_legs = num_legs
  }
}
class Bat extends Mammal{
  constructor(num_legs){
    super()
    this._num_legs = num_legs
  }
}
class Chimpanzee extends Primate{
  constructor(num_legs){
    super()
    this._num_legs = num_legs
  }
}


let chimps = new Chimpanzee(2)
let superChimpanze = new SuperPowerMammal()
console.log(chimps)
console.log(superChimpanze)
