const timer = document.querySelector("#timer");
const iniciar = document.querySelector("#iniciar");
const parar = document.querySelector("#parar");
const zerar = document.querySelector("#zerar");
const parcial = document.querySelector("#parcial");
const parcialRegistrado = document.querySelector("#parcialRegistrado");

let tempo = null
let tmpIni = null

function contador(){
  const tmpAtual = Date.now();
  let cont = tmpAtual-tmpIni;
  let seg = Math.floor((tmpAtual-tmpIni)/1000);
  timer.innerHTML = conversao(seg);
  console.log(seg);
}

function conversao(seg){
  const hora = Math.floor(seg/3600);
  const resto = seg%3600;
  const minuto = Math.floor(resto/60);
  const segundos = Math.floor(resto%60);
  const form = `${hora<10?`0${hora}`:hora}:${minuto<10?`0${minuto}`:minuto}:${segundos<10?`0${segundos}`:segundos}`
  return form
}

iniciar.addEventListener('click',()=>{
  tempIni = Date.now();
  tempo = setInterval(contador,1000)
})
parar.addEventListener('click',()=>{
  clearInterval(tempo)
})
zerar.addEventListener('click',()=>{
  tempIni = Date.now();
  timer.innerHTML = "00:00:00"
})
parcial.addEventListener('click',()=>{
  let parcial = `<div>${timer.innerHTML}</div>`
  parcialRegistrado.innerHTML+=parcial


})