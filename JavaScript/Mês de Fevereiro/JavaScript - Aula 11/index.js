const valor = 2;
const validador = true;
const bloco =[
    {
        nome:'Daniel',
        texto:'oi',
        validador:false,
    },
    {
        nome:'Daniel',
        texto:'oi',
        validador:false,
    },
]
   

console.log(`
 ${bloco.map(bloco =>{
    return(
        typeof(bloco.nome),
        typeof(bloco.texto)
    )
 })}
`)
