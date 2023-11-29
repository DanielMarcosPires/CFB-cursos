const timer = document.querySelector("#timer");
const btnReset = document.querySelector("#reset")
const tmpIni = Date.now();

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
btnReset.addEventListener("click",()=>{
  tmpIni = Date.now();
})
setInterval(contador,1000)
console.log(tmpIni);