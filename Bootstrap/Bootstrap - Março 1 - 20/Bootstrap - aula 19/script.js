const itens = [...document.querySelectorAll('li')]

itens.map((item, indice)=>{
    item.addEventListener('click',()=>{
       let selecionar = item.classList.contains('active');
        if(selecionar === true){
            item.classList.remove('active')
        }else{
            item.classList.add('active')
        }
    })
})