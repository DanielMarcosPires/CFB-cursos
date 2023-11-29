const valores = [1,2,3,4,5,12,31,2];
const itValores = valores[Symbol.iterator]()

console.log(valores);
console.log(itValores.throw);