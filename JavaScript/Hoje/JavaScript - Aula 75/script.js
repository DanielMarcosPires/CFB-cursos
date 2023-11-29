const numero = document.querySelector("#numero");

let promise = new Promise((resolve, reject) => {
  let res = true;
  let temp = 1000;
  setTimeout(() => {
    if(res){
        resolve("deu tudo OK")
    }else{
        reject("Deu tudo errado")
    }
  }, temp);
});

promise.then((retorno)=>{
    numero.innerHTML = retorno;
    numero.classList.remove("erro");
    numero.classList.add("ok");
})
promise.catch((retorno)=>{
    numero.innerHTML = retorno;
    numero.classList.add("erro");
    numero.classList.remove("ok");
})


numero.innerHTML = 'Carregando...';
