const $tNum = [...document.querySelectorAll(".num")]
const $Simbol = [...document.querySelectorAll(".simbol")]
const $tRes = document.querySelector(".equal")
const $display = document.querySelector("#display")
const $clr = document.querySelector(".clear")
let sinal = false

$tNum.forEach((el)=>{
  el.addEventListener("click",(evt)=>{
    sinal = false;
    $display.innerHTML+=evt.target.innerHTML
  })
})
$Simbol.forEach((el)=>{
  el.addEventListener("click",(evt)=>{
    if(!sinal){
      sinal = true;
      if($display.innerHTML =="0"){
        $display.innerHTML =""
      }
      if(evt.target.innerHTML == "x"){
        $display.innerHTML += "*"
      }else{
        $display.innerHTML += evt.target.innerHTML
      }
    }
  })
})
$tRes.addEventListener(`click`,()=>{
  const res = eval($display.innerHTML)
  $display.innerHTML=res
})
$clr.addEventListener("click",(el)=>{
  $display.innerHTML = '0'
})