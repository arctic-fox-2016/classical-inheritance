"use strict"

class Animal {
  constructor(components) {
    this.num_legs = components['num_legs']
    this.is_warm_blooded = components['is_warm_blooded']
    this.power = components['power']
  }
}

class Mammal extends Animal {
  constructor(components) {
    super(components);
    this.is_melahirkan = components['is_melahirkan']
  }
}

class Amphibian extends Animal {
  constructor(components) {
    super(components);
    this.is_bertelur = components['is_bertelur']
  }
}

class Primate extends Animal {
  constructor(components) {
    super(components);
    this.is_bisa_manjat_pohon = components['is_bisa_manjat_pohon']
  }
}

class Reptile extends Animal{
  constructor(components) {
    super(components);
    this.is_menjijikkan = components['is_menjijikkan']
  }
}

class Whale extends Mammal {
  constructor(components) {
    super(components);
  }
}

class Frog extends Amphibian{
  constructor(components) {
    super(components);
    this.is_bernafas_pake_leher = components['is_bernafas_pake_leher']
  }
}

class Chimpanzee extends Primate{
  constructor(components) {
    super(components);
    this.is_kaya_manusia = components['is_kaya_manusia']
  }
}

class Komodo extends Reptile{
  constructor(components) {
    super(components);
    this.is_banyak_di_indo = components['is_banyak_di_indo']
  }
}

class SuperPoweredWhale extends Whale{
  constructor(components) {
    super(components);

  }
}

class SuperPoweredFrog extends Frog{
  constructor(components) {
    super(components);

  }
}

class SuperPoweredChimpanzee extends Chimpanzee{
  constructor(components) {
    super(components);

  }
}

class SuperPoweredKomodo extends Komodo{
  constructor(components) {
    super(components);
    this.kickskill = components['kickskill']
  }

  jumpKick(){
    return this.kickskill = "Jump High";
  }
}

let whale = new Mammal({
  num_legs:4,
  is_warm_blooded:true,
  is_melahirkan:true,
  power: 30
})

console.log(whale);

let komodo_jawa = new SuperPoweredKomodo({
    num_legs:5,
    is_warm_blooded:false,
    is_menjijikkan:"iya bgt!",
    is_banyak_di_indo:"bohong!",
    power:20
})


console.log(komodo_jawa.jumpKick()) // komodo super bisa loncat dan tendang
console.log(komodo_jawa)
