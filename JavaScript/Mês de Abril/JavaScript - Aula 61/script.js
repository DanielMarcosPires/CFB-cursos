const [tiposDeCarro,preco] = [
    ["Esportivo", "Utilitario","Passeio","Militar"],[300,250,100,500]
]

function carro(){
    constructor=function(nome,tipoDoCarro){
        this.nome = nome;
        if(tiposDeCarro.includes(tipoDoCarro)){
            return this.tipoDoCarro = tipoDoCarro
        }
        return this.tipoDoCarro = false
    }
    getPreco=function(valor){
        if(preco.includes(valor)){
            return this.valor = valor
        }
        return this.tipoDoCarro = valor
    }
}


let carros = new carro("Tank","Militar");
carros.getPreco(250)
tiposDeCarro.map(()=>{

})

console.log(carros);


