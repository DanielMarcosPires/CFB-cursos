function aluno(nome,nota){
    this.nome=nome;
    this.nota=nota;

    this.dados_anonimo=function(){
        setTimeout(()=>{
            console.log(this.nome);
            console.log(this.nome);
        },1000)
    }
    this.dados_arrow=()=>{
        setTimeout(()=>{
            console.log(this.nome);
            console.log(this.nome);
        },1000)
    }
}

const al1 = new aluno("Bruno", 100)
al1.dados_anonimo()
al1.dados_arrow()
aluno("Bruno",100);
aluno("Kewin",50);
