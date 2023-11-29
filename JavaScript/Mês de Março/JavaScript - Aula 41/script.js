const $caixa1=document.querySelector("#caixa1");
const $btn=[...document.querySelectorAll('.curso')];
const $c1_2=document.querySelector('#c1_2');
const cursos =["HTML","CSS","JavaScript","PHP","React"]


cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div");
    novoElemento.setAttribute("id","c7")
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML = `${chave} ${el}`
  
    const btn_lixeira=document.createElement("img")
    btn_lixeira.setAttribute("src","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.P4DMuIBeaquqp4D0uCtMawHaEK%26pid%3DApi&f=1&ipt=bc05177637c7271764a3474716bf779660db147a71d501f654cd1811381042ca&ipo=images");

    novoElemento.appendChild(btn_lixeira)

    novoElemento.addEventListener("click",(e)=>{
        $caixa1.removeChild(e.target)
    })
    $caixa1.appendChild(novoElemento)

})

