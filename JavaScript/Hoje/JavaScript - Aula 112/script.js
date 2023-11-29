const p1 = document.querySelector("#p1")
const p2 = document.querySelector("#p2")
const posX = document.querySelector("#posX");
const posY = document.querySelector("#posY");
const largura = document.querySelector("#largura")
const altura = document.querySelector("#altura")

let DOMRect_q1 = q1.getBoundingClientRect()

posX.innerHTML = `posX:${DOMRect_q1.x}`
posY.innerHTML = `posY:${DOMRect_q1.y}`
largura.innerHTML = `largura:${DOMRect_q1.width}`
altura.innerHTML = `altura:${DOMRect_q1.height}`