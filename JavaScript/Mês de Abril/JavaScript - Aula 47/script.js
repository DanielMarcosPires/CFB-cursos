
const $array = document.querySelector('#array');
const $txt_pesquisar = document.querySelector('input[name="txt-pesquisar"]');
const $btnPesquisar = document.querySelector('#btnPesquisar');
const $resultado = document.querySelector('#resultado');

const elementos_array =[10,5,9,0,2,1,0,39,0,"Daniel"];

$array.innerHTML = elementos_array;

$btnPesquisar.addEventListener('click',(e)=>{
   const ret= elementos_array.find((e,i)=>{
    if(e == $txt_pesquisar.value){
        $resultado.innerHTML = `${e}`
        return e;
       }
    })
    console.log(ret);
})