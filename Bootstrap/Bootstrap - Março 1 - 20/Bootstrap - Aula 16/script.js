const $btn = document.querySelector('.btn')

$btn.addEventListener("click",(e)=>{
    const $progresso = document.querySelector('#progresso')
    let carga = 0;
   barra = setInterval(()=>{
   const soma = 0
   while(true){
    $progresso.computedStyleMap.width=carga+'%'
    if(carga>=100){
        carga=0
    }
   }
   },1000)
})