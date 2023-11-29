function mudarTexto() {
    let n1=15;
    let n2 = 3;
    let res = n1*n2
    if(res%2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}
console.log(mudarTexto());