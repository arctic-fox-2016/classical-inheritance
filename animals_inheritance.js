"use strict"
class Animal {
  constructor(num_legs, is_warm_blooded) {
    this.num_legs = num_legs
    this.is_warm_blooded = is_warm_blooded
  }
}
class Mammal extends Animal {
  constructor(num_legs, is_warm_blooded) {
      super(num_legs,is_warm_blooded)
  }
}

class Amphibian extends Animal{
  constructor(num_legs, is_warm_blooded) {
    super(num_legs,is_warm_blooded)
  }
}

class Primate extends Animal{
  constructor(num_legs, is_warm_blooded) {
    super(num_legs,is_warm_blooded)
    this.num_legs = 2
    this.is_warm_blooded = true
  }
	walk() {
		console.log('walking');
	}
}

class Frog extends Amphibian{
  constructor(num_legs, is_warm_blooded) {
      super(num_legs,is_warm_blooded)
  }
}

class SuperPowerFrog  extends Frog
{
  constructor(num_legs, is_warm_blooded) {
  super(num_legs,is_warm_blooded)
  }
  use_laser_vision()
  {
    console.log("Shoot laser")
  }

  be_invisible()
  {
    console.log("Invisible")
  }
}

class Bat extends Mammal{
  constructor(num_legs, is_warm_blooded) {
      super(num_legs,is_warm_blooded)
  }
}

class SuperPowerBat  extends Bat
{
  constructor(num_legs, is_warm_blooded) {
  super(num_legs,is_warm_blooded)
  }
  use_laser_vision()
  {
    console.log("Shoot laser")
  }

  be_invisible()
  {
    console.log("Invisible")
  }
}

class Chimpanzee extends Primate{
  constructor(num_legs, is_warm_blooded) {
    super(num_legs,is_warm_blooded)
  }
}

class SuperPowerChimpanze  extends Chimpanzee
{
  constructor(num_legs, is_warm_blooded) {
  super(num_legs,is_warm_blooded)
  }
  use_laser_vision()
  {
    console.log("Shoot laser")
  }

  be_invisible()
  {
    console.log("Invisible")
  }
}



var superpower = new SuperPowerChimpanze()
var chimpa = new Chimpanzee(2,false)
superpower.use_laser_vision()
chimpa.walk()
console.log(chimpa.num_legs)
