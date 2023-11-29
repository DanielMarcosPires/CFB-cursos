const numero = document.querySelector("#numero");

const btn = document.querySelector(`.promessa`);

btn.addEventListener("click", () => {
  numero.innerHTML = "Carregando";
  promessa()
    .then((retorno) => {
      numero.innerHTML = retorno;
      numero.classList.remove("erro");
      numero.classList.add("ok");
    })
    .catch((retorno) => {
      numero.innerHTML = retorno;
      numero.classList.add("erro");
      numero.classList.remove("ok");
    })
});

function promessa() {
  let promise = new Promise((resolve, reject) => {
    let res = true;
    let temp = 1000;
    setTimeout(() => {
      if (res) {
        resolve("deu tudo OK");
      } else {
        reject("Deu tudo errado");
      }
    }, temp);
  });

  numero.innerHTML = "Carregando...";
}
