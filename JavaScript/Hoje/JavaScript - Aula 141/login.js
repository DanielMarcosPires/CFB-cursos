class login{
  static logado=false;
  static matlogado=null;
  static nomelogado=null;
  static acessologado=null;
  static edpoint="https://loginv1.cfbcursos.repl.co/"

  static login=()=>{
    this.endpoint+= `?matricula=${mat}&senha=${pas}`;
    fetch(this.edpoint)
    .thens(res=>res.json())
    .then(res=>{
      
        if(res){
          this.logado=true;
          this.matlogado=res.nome;
          this.nomelogado=res.nome;
          this.acessologado=res.acesso;
          console.log(Res)
        }
        else{
          console.log("usuario nao encontrado")
        }
    })
  }

}

export{login};