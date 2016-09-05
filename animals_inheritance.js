"use strict"

class Animal {
  constructor(options) {
    this._name = options['name']
    this.num_legs = options['num_legs']
  }
  eat(food) {
    console.log(`${this._name} eat ${food}`)
  }
}

class Mammal extends Animal {
  constructor(options) {
    super(options)
    this.suckle = options['suckle']
  }

  is_give_birth() {
    return true
  }
  is_have_lungs() {
    return true
  }

}

class Primate extends Mammal {
  constructor(options) {
    super(options)
    this.walk = options['walk']
  }
  is_warm_blooded() {
    return true
  }
  walking() {
    console.log(`${this._name} have ${this.num_legs} legs\n ${this._name} and Yes ${this._name} breast-feeding\n and ${this._name} walks using ${this.num_legs} legs`)
  }
}

class Bat extends Mammal {
  constructor(options) {
    super(options)
    this.fly = options['fly']
  }
  is_fly() {
    return this.fly
  }
  use_sonic_vision() {
    console.log(`${this._name} can seek by sonic vision`)
  }

}
class Reptile extends Animal {
  constructor(options) {
    super(options)
    this.cold_blood = options['cold_blood']
  }
  is_cold_blood() {
    return this.cold_blood
  }
}


class SuperPoweredBat extends Bat {
  constructor(options) {
    super(options)
  }
  use_laser_vision() {
    console.log(`Super ${this._name} can use laser to crush you`)
  }
  be_invisible() {
    console.log(`you Can't see Super ${this._name}`)
  }
}
class SuperPoweredReptile extends Reptile {
  constructor(options) {
    super(options)
  }
  bigSize() {
    console.log(`Super ${this._name} have tens meter long`);
  }
  longLive() {
    console.log(` You have no idea how long ${this._name} live bar`);
  }
}


let manusia = new Primate({
  name: "Aji",
  num_legs: 2,
  suckle: true,
  walk: true
})
manusia.walking()
let kelelawar = new Bat({
  name: "kelelawar hitam",
  num_legs: 2,
  suckle: true,
  fly: true
})
kelelawar.use_sonic_vision()
let kalong = new SuperPoweredBat({
  name: "kalong desa",
  num_legs: 2,
  suckle: true,
  fly: true
})
kalong.use_laser_vision()
kalong.be_invisible()
let ular = new Reptile({
  name: "ular sawah",
  num_legs: 0,
  cold_blood: true
})
if (ular.is_cold_blood()) console.log(`${ular._name} berdarah dingin`)
let ulargede = new SuperPoweredReptile({
  name: "Anaconda",
  num_legs: 0,
  cold_blood: true
})
ulargede.bigSize()
ulargede.longLive()
