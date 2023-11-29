

function soma(...valores) {
    let res = 0;
    for(let i in valores){
        res+=valores[i]
    }
    return res
}
console.log(soma(10, 5, 5, 10));
