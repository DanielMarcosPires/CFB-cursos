const objeto = {
    cpu:300,
    nome:"Daniel"

}
const c1 = Object.assign({teste:"testado"},objeto)
console.log(
    `
    CPU:${objeto.cpu}
    Nome:${c1.teste}
    `
);