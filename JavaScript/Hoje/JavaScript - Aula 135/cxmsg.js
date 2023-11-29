let mostrarCxmsg = document.querySelector(".mostrarCxmsg");
let fechar = document.querySelector("#fechar");
class csMSG{
    titulo=null;
    texto=null;
    cor=null;
    destino=null;
    msg = document.querySelector("section");
    
    constructor(config){
            this.mostrar();
            this.verificacao = true
    }
    mostrar(){
        this.msg.innerHTML = `
            <div class="caixaDeTexto">
                <header class="caixaDeTextoHeader">
                  <h2>Mostrou</h2>
                  <button id="fechar">X</button>
                </header>
                <main class="caixaDeTextoMain">
                    <h2>Titulo</h2>
                    <p>lorem ipsun...</p>
                </main>
            </div>
        `
    }
}
mostrarCxmsg.addEventListener("click",()=>{
    const caixa = new csMSG()
})