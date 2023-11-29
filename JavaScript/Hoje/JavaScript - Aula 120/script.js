const $f_nome = document.querySelector("#f_nome");
const $f_nota = document.querySelector("#f_nota");
const $f_msg = document.querySelector("#f_msg");
const $btn = document.querySelector("#btn");


$btn.addEventListener("click",(evt)=>{
    evt.preventDefault();

    let msg = null;
    if(!$f_nota.checkValidity()){
        $f_nota.setCustomValidity("Este campo é obrigatório")
    }
    $f_nota.reportValidity()
    $f_msg.innerHTML = msg
});