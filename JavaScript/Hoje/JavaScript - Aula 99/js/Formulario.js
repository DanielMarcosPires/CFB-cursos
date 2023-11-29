export class Jogador {
    constructor(nome) {
     this.nome=nome;
     this.id=Symbol()
    }
  }
  let jogadores = [new Jogadores("j1"),new Jogadores("j2"),new Jogadores("j3"),new Jogadores("j4")]
  
  let s =[];

  let s_jogadores=jogadores.filter((j)=>{
    return j.nome!="j1"
  })
  s=s_jogadores.map((j)=>{
    return j.id
  })

  console.log(s_jogadores);
  console.log(s);