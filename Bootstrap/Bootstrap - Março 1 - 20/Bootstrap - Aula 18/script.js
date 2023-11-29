const ativar = [...document.querySelectorAll('.page-item')];
console.log(ativar);

ativar.map((item,i)=>{
    item.addEventListener("click",(e)=>{
        let classe = ativar[i].classList.contains('active');
        if(classe === true){
            ativar[i].classList.remove('active');
        }else{
            ativar[i].classList.add('active');
        }
    })
})