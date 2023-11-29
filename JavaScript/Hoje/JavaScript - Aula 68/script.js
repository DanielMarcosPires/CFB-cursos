class CarroPadrao{
  constructor(){
   this.rodas = 4;
   this.portas = 4;
   this.ligado = false;
}
}

class Carro extends CarroPadrao {
  constructor(tipo, estagioTurbo) {
    this.Turbo = new Turbo(1);
    this.nome = "normal";
    if (tipo == 1) {
      this.velMax = 120;
      this.nome = "normal";
    } else if (tipo == 2) {
      this.velMax = 160;
      this.nome = "esportivo";
    } else if (tipo == 3) {
      this.velMax = 200;
      this.nome = "super esportivo";
    }
    this.velMax += this.turbo;
  }
  info() {
    console.log(this.nome);
    console.log(this.velMax);
    console.log(this.turbo);
    console.log("===========");
  }
}

class Turbo {
  constructor(e) {
    if (e == 0) {
      this.pot = 0;
    } else if (e == 1) {
      this.pot = 50;
    } else if (e == 2) {
      this.pot = 75;
    } else if (e == 3) {
      this.pot = 100;
    }
  }
}

const c1 = new Carro(1,0);
const c2 = new Carro(1,1);

console.log(c1.info);