const $militar = document.querySelector(".militar");
const $normal = document.querySelector(".normal");
const $blindagem = document.querySelector(".blindagem")
const $blindagemInput = document.querySelector('#I_Blindagem')
const $municao = document.querySelector('#municao')
const $carros = document.querySelector(`.carros`);
const $add_btnCarro = document.querySelector(".btnCarro")

const $f_nome = document.querySelector("input[name='f_nome']")
const $f_portas = document.querySelector("input[name='f_portas']")

let a_carros=[]

$militar.addEventListener(`click`,()=>{
    console.log(`militar`);
    $blindagemInput.removeAttribute("disabled","")
    $municao.removeAttribute("disabled","")
})
$normal.addEventListener(`click`,()=>{
    $blindagemInput.setAttribute("disabled","");
    $municao.setAttribute("disabled","")
    console.log(`normal`);
})

const gerenciarExibicaoCarros=()=>{
    $carros.innerHTML="";
    a_carros.forEach((c)=>{
        const div = document.createElement("div");
        div.setAttribute("class","carro");
        div.innerHTML=c.nome
        $carros.appendChild(div)
    });
}

$add_btnCarro = document.addEventListener("click",()=>{
    if($normal.checked){
        const c = new Carro($f_nome.ariaValueMax, $f_portas.value)
    }
    gerenciarExibicaoCarros()
})

class Carro{
    constructor(nome,portas){
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;  
        this.vel = 0;   
        this.cor = undefined
    };
    ligar=function(){
        this.ligado = true;
    };
    desligar=function(){
        this.ligado = false;
    };
    setCor = function(cor){
        this.cor = cor;
    }
};

class Militar extends Carro {
    constructor(nome,portas,blindagem,municao){
        super(nome,portas);
        this.blindagem=blindagem;
        this.municao=municao;
        this.setCor("Verde");
    }
    atirar=function(){
        if(this.municao>0){
            this.municao--
        }
    }
}