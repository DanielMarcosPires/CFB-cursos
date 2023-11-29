
const $array = document.querySelector('#array');
const $btnPesquisar = document.querySelector('#btnReduzir');
const $resultado = document.querySelector('#resultado');

const elementos_array = [1,2,3,4,10];

$array.innerHTML = `[${elementos_array}]`

$btnPesquisar.addEventListener('click',(e)=>{
    $resultado.innerHTML = elementos_array.reduce((an,at,ps)=>{
        return an+at
    })
})