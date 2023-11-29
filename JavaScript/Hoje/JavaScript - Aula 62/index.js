class Carro{
    constructor(nome){
        this.nome = nome;
        this.portas = 2
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar=function(){
        this.ligado=true;
    }
    desligar=function(){
        this.ligado=false;
    }
    setCor= function(cor){
        this.cor=cor
    }
}

class Militar extends Carro{

}

const c1 = new Carro("Normal", 4);
const c2 = new Militar()
console.log(`Nome: ${c1.nome}`);
console.log(`Portas: ${c1.portas}`);
console.log(`Ligado: ${(c1.ligado?"Sim":"Não")}`);
console.log(`Velocidade: ${c1.vel}`);
console.log(`Cor: ${c1.cor}`);
console.log("========================");
console.log(`Nome: ${c2.nome}`);
console.log(`Portas: ${c2.portas}`);
console.log(`Ligado: ${(c2.ligado?"Sim":"Não")}`);
console.log(`Velocidade: ${c2.vel}`);
console.log(`Cor: ${c2.cor}`);