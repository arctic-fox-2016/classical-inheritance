"use strict"
class Animal {
    constructor(name,age) {
      this._name = name;
      this._age = age;
      this._isLive = true;
    }
    showLive() {
      return `apakah hidup? ${this._isLive}`
    }
    showIdentity(){
        console.log(`hewan ${this._name} berumur : ${this._age} tahun. Apakah hidup? ${this._isLive}`)
    }
    showAge(){
      console.log(`hewan ini berumur : ${this._age} tahun`)
    }
}
class Mammal extends Animal {
  constructor(name,age){
    super(name,age);
    this._giveBirth = true;
    }
  showGiveBirth(){
    console.log(`apakah ${this._name} melahirkan? ${this._giveBirth}`)
  }
}
class Primate extends Mammal{
  constructor(name,age,isLive,giveBirth, numLegs) {
    super(name,age,isLive,giveBirth)
    this._numLegs = 2
  }
  showNumLegs(){
    console.log(`punya berapa kaki ? ${this._numLegs}`)

  }
}


 class Amphibian extends Animal{
   constructor(name,age){
     super(name,age)
     this._coldBlooded = true
   }
   showBlood(){
     return `apakah berdarah panas? ${this._coldBlooded}`

   }
 }
 class Frog extends Amphibian{
   constructor(name,age,color) {
     super(name,age);
     this._color = color
   }

   showColor() {
     return `warna apa ${this._name} ini ? ${this._color}`

   }
 }

 class Bat extends Mammal{
   constructor(name,age,species) {
     super(name,age)
     this._species = species
   }
   showSpecies() {
     console.log(`${this._name} adalah kelelawar spesies ${this._species}`)

   }
 }

 class Reptile extends Animal{
   constructor(name,age) {
     super(name,age)
     this._creep = true
   }
   showCreep(){
     console.log(`Apakah ${this._name} merayap? ${this._creep}`)
   }
 }

 class Chimpanzee extends Primate{
   constructor(name,age,breastfeed) {
     super(name,age)
     this._breastfeed = true
   }
   showBreastFeed(){
     console.log(`Apakah ${this._name} menyusui anaknya? ${this._breastfeed}`)
   }
 }

 class Fox extends Mammal{
   constructor(name,age,eatmeat) {
     super(name,age)
     this._eatmeat = true
   }
   showEatmeat(){
     console.log(`Jenis hewan pemakan daging kah ${this._name}? ${this._eatmeat}`)
   }
 }

 class Fish extends Animal{
   constructor(name,age,swim) {
     super(name,age)
     this._swim = true
   }
   showSwim(){
     if (this._swim===true){
       console.log(`hewan ini berenang`)
     }
   }
 }

 let dory = new Fish('Dory',22)
 dory.showIdentity()
 dory.showSwim()
 let foxy = new Fox('Foxy', 23)
 foxy.showIdentity()
 foxy.showEatmeat()
 foxy.showGiveBirth()
 let lizardMan = new Reptile('Lizard Man', 32)
 lizardMan.showIdentity()
 lizardMan.showCreep()
 let kingKong = new Chimpanzee('King Kong', 100)
 kingKong.showIdentity()
 kingKong.showNumLegs()
 kingKong.showGiveBirth()
 kingKong.showBreastFeed()
 let batman = new Bat('Batman', 46)
 batman.showIdentity()
 batman.showSpecies()
 batman.showGiveBirth()


 // console.log(serigala.showAge())
 // console.log(serigala.showIdentity())
 // console.log(serigala.showLive())
 // console.log(kodok.showGiveBirth()) //Mammal
 // console.log(kodok.showNumLegs()) //Primate
 // console.log(kodok.showBlood()) //Amphibian
 // console.log(kodok.showColor()) //Amphibian
 // console.log(kadal.showSpecies()) // Bat
 // console.log(simpanse.showCreep())//Reptile
 // console.log(simpanse.showBreastfeed())//Chimpanzee
 // console.log(serigala.showSwim())
 // console.log(gorilla.showGiveBirth())
 // gorilla.age()
