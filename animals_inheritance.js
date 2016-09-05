"use strict"

class Animal {
  constructor() {

  }
}

class Mammal extends Animal {
  constructor() {
    super()
    this.is_warm_blooded = true
  }
}

class Amphibian extends Animal {
  constructor() {
    super()
    this.is_warm_blooded = false
  }
}

class Primate extends Mammal {
  constructor() {
    super()
    this.num_legs = 2
  }
}

class Frog extends Amphibian {
  constructor() {
    super()
  }
}

class Bat extends Mammal{
  constructor() {
    super()
  }
}

class Chimpanzee extends Primate {
  constructor() {
    super()
    this.use_lazer_vision = true
  }
}

var monyet = new Chimpanzee()
console.log(monyet)
