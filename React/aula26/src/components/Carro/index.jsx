import  { Component } from 'react'

export default class Carro extends Component {
  constructor(props){
    super(props)
    this.modelo= 'HRV';
    this.state={
      ligado:false,
      velAtual:0
    }
    this.ld=this.ligarDesligar.bind(this)
  }
  ligarDesligar(){
    this.setState(
      (state)=>(
        {ligado:!state.ligado}
        )
    )
  }
  componentDidMount(){
    console.log("O carro foi criado!");
  }
  componentDidUpdate(){
    console.log("Atualizado");
  }
  render() {
    return (
      <div>
        <h1>Meu Carro</h1>
        <p>Modelo: {this.modelo}</p>
        <p>Ligado: {this.state.ligado?'sim':'não'}</p>
        <p>Velocidade: {this.state.velAtual}</p>
        <button onClick={this.ld}>
          {this.state.ligado? "Desligar o Carro":'Ligar'}
        </button>
      </div>
    )
  }
}
