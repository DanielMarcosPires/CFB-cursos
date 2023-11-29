class Pessoa{
    constructor(nome,idade){
        this.nome=nome
        this.idade = idade >=0 ? idade :"Valor Não aceito!"
    }
}
let p1 = new Pessoa('Daniel',18);
let p2 = new Pessoa('Marcos',40);

console.log(p1);
console.log(p2);