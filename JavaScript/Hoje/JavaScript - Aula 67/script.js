const Nave = function(energia){
  this.energia = energia;
  this.disparos = 100;
}

const n1 = new Nave();

Nave.prototype.vidas =3;

console.log(n1.vidas);