const $pilulas = [...document.querySelectorAll("#pilulas")];

$pilulas.forEach((itens)=>{
    itens.addEventListener("focus",(ev)=>{
       itens.classList.toggle("active")
    })
    itens.addEventListener("mouseover",()=>{
      itens.classList.toggle("active")
    })
    itens.addEventListener("mouseout",()=>{
      itens.classList.toggle("active")
    })
})

