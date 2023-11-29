import  { Component } from 'react'

export default class Carro extends Component {
  constructor(props){
    super(props)
    this.modelo= 'HRV';
    this.state={
      ligado:false,
      velAtual:0
    }
  }
  ligarDesligar(){
    this.setState(
      (state)=>({
        ligado:!state.ligado
      })
    )
  }
  render() {
    return (
      <div>
        <h1>Meu Carro</h1>
        <p>Modelo: {this.modelo}</p>
        <p>Ligado: {this.state.ligado?'sim':'não'}</p>
        <p>Velocidade: {this.state.velAtual}</p>
        <button onClick={()=>this.ligarDesligar()}>
          {this.state.ligado? "Desligar o Carro":'Ligar'}
        </button>
      </div>
    )
  }
}
