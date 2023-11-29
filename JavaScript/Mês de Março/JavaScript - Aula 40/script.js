const $caixa1=document.querySelector("#caixa1");
const $btn=[...document.querySelectorAll('.curso')];
const $c1_2=document.querySelector('#c1_2');
const cursos =["HTML","CSS","JavaScript","PHP","React"]


cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div");
    novoElemento.setAttribute("id","c7")
    novoElemento.setAttribute("class","curso c1")

    novoElemento.innerHTML = `${chave} ${el}`
    $caixa1.appendChild(novoElemento)

})

