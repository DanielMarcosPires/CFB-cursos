const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelectorAll('#btn_copiar')
const todos = [...document.querySelectorAll('.curso')]

todos.map((iterar)=>{
    iterar.addEventListener("click",(e)=>{
        const curso = e.target;
        curso.classList.toggle("selecionado")
    })
})


btn.addEventListener("click",()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    const cursosnaoselecionados = [...document.querySelectorAll(".cursos:not(.selecionado)")]
    console.log('oi')
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    cursosnaoselecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})