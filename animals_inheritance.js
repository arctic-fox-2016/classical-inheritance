"use strict"

class SuperPower {
  constructor() {
  }

  use_lazer_vision() {
    console.log("LASERRRRR")
  }

  use_flying(x) {
    console.log("TERBANG")
  }
}

class Animal extends SuperPower {
  constructor() {
    super()
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

class Bat extends Mammal {
  constructor() {
    super()
  }
}

class Chimpanzee extends Primate {
  constructor() {
    super()
  }
}

var monyet = new Chimpanzee()
monyet.use_lazer_vision()
monyet.use_flying()
