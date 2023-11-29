const objeto = [
    {
        Nome:"Daniel",
        Idade:18
    },
    {
        Nome:"Kewin",
        Idade:20
    },
    {
        Nome:"Caio",
        Idade:24
    },
    {
        Nome:"João",
        Idade:30
    },
    {
        Nome:"Lucas",
        Idade:19
    }
]
const input = document.querySelector('input')
const btn = document.querySelector('button')

let lista = objeto.filter((itens, valor)=>{
        return `${valor} ${itens}`
})

    function padrao() {
        console.log(lista);
    }

btn.addEventListener("click",()=>{

    console.log(lista[input.value]===undefined?padrao():lista[input.value]);

})
