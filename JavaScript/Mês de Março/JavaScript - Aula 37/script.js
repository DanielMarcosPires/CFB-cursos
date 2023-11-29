const $caixa1 = document.querySelector('#caixa1')
const btn = document.querySelector('#c1')

$caixa1.addEventListener("click",(e)=>{
    console.log("clicou")
})
btn.addEventListener("click",(e)=>{
    e.stopPropagation
    console.log(e)
})