const $ativar = document.querySelector(`#ativar`);
const $parar = document.querySelector(`#parar`);
const $tempo = document.querySelector(`#tempo`);
const $segundos = document.querySelector(`.segundos`);

class Time {
  constructor(sec, min, hour) {
    this.sec = sec < 10 ? `0${sec}` : sec;
    this.min = min < 10 ? `0${min}` : min;
    this.hour = hour < 10 ? `0${hour}` : hour;
  }
}
let time;

let flip = false;
function relogio(flipflop){
  if(flipflop){
    time = setInterval(() => {
     let date = new Date();
     time = new Time(date.getSeconds(), date.getMinutes(), date.getHours());
   
     $tempo.innerHTML = `${time.hour}:${time.min}:${time.sec}`;
     $segundos.innerHTML = soma += 1;
   }, 1000);
  }else{
    clearInterval(time)
  }
}

let soma = 0;
$ativar.addEventListener("click", () => {
  if(soma === 0){
    relogio(true)
    soma += 1
  }else if(soma === 1){
    relogio(false)
  }
});

$parar.addEventListener("click", () => {
  relogio(false)
});
