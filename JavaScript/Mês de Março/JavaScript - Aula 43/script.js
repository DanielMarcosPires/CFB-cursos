const objeto = [
    {
      Nome: `<p class="Nome">Daniel</p>`,
      Idade: 18,
    },
    {
      Nome: `<p class="Nome">Kewin</p>`,
      Idade: 20,
    },
    {
      Nome: `<p class="Nome">Caio</p>`,
      Idade: 24,
    },
    {
      Nome: `<p class="Nome">João</p>`,
      Idade: 30,
    },
    {
      Nome: `<p class="Nome">Lucas</p>`,
      Idade: 19,
    },
  ];
  
  const input = document.querySelector("input");
  const btn = document.querySelector(".filtro");
  const cards = document.querySelector(".cards");
  
  let lista = [];
  
  function filtrar() {
    const val = input.value;
    lista = objeto.filter((item) => {
      return Object.values(item).some((value) => {
        if (typeof value === "string") {
          return value.includes(val);
        } else {
          return false;
        }
      });
    });
  }
  
  function padrao() {
    console.log(lista);
  }
  
  function exibir() {
    let output = "";
    lista.forEach((item) => {
      for (let prop in item) {
        if (item[prop] && typeof item[prop] === "string") {
          output += `${item[prop]}<br>`;
        }
      }
    });
    output = output.replace(/({|}|")/g, "");
    output = output.replace(/Nome:/g, "");
    output = output.replace(/<[^>]*>/g, "");
    cards.innerHTML = output;
  }
  
  btn.addEventListener("click", () => {
    filtrar();
    if (lista[input.value] === undefined) {
      cards.innerHTML = padrao();
    } else {
      exibir();
    }
  });
  