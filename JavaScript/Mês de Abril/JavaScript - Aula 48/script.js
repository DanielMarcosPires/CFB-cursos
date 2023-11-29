
const $array = document.querySelector('#array');
const $txt_pesquisar = document.querySelector('input[name="txt-pesquisar"]');
const $btnPesquisar = document.querySelector('#btnPesquisar');
const $resultado = document.querySelector('#resultado');

const elementos_array =[10,5,9,0,2,1,0,18,0,"Daniel"];

$array.innerHTML = elementos_array;

$btnPesquisar.addEventListener('click',(e)=>{
   const ret = elementos_array.every((e,i)=>{
    if(e<18){
        $resultado.innerHTML="Array não conforme na posição"+ i
    }    
    return e>=18
   })
   ret? elementos_array.innerHTML = `ok` : false
})