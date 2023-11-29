export class Formulario {
    constructor() {
      this.formulario = document.querySelector("form");
      this.span = document.querySelector(".dados");
      this.formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        this.enviarDados([...e.target.elements]);
      });
    }
  
    enviarDados(dados) {
      dados.forEach((element) => {
        if (element.type !== "submit") {
          this.span.innerHTML += `<div>${element.value}</div>`;
        }
      });
    }
  }
  