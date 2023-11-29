const tiposDeCarro = [
    "Esportivo", 
    "Utilitario",
    "Passeio",
    "Militar", 
]

class carro{
    constructor(nome,tipoDoCarro){
        this.nome = nome;
        if(tiposDeCarro.includes(tipoDoCarro)){
            return this.tipoDoCarro = tipoDoCarro
        }
        return this.tipoDoCarro = false
    }
}


let carros = new carro("Tank","Esportivo");

console.log(carros);

