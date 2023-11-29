let mapa = new Map();

mapa.set('oi','Daniel')
console.log(mapa);

if(mapa.has('oi')){
    console.log(`A chave existe`);
}else{
    console.log(`A chave não existe`);
}