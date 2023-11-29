function* contador(valor){
    let i = 0;
    while(true){
        yield i++
        if(i>valor)
        break;
    }
}

const itc = contador(20)
for(c of itc){
    console.log(c);
}