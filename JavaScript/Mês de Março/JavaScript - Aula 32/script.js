const cursoTodos = [...document.getElementsByClassName("curso")]
const cursoc1 = [...document.getElementsByClassName("c1")]

    cursoTodos.map(el =>{
        el.classList.add("destaque")
    })
    cursoc1.map(el=>{
        el.classList.remove("destaque")
    })