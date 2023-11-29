import documentoHTML from "./js/documentoHTML.js"
import Header from "./js/Header/index.js"

const estrutura = document.querySelector("Body")

const objeto = [
    documentoHTML(),
]

estrutura.innerHTML= objeto.map((e)=>{
    return e
})