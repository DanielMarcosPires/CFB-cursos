import React, { Component } from 'react'

export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
            canal:'CFB Cursos',
            curso:"react",
            ativo:true,
            nome:this.props.nomeAluno
        }
        this.status=this.props.status
        let ad=ativarDesativar.bind(this)
    }
    ativarDesativar(){
        this.setState(
            (state)=>(
                ativo=!state.ativo
            )
        )
    }
    componentDidMount(){
        console.log("Component criado!");
    }
    componentDidUpdate(){
        console.log("O componente foi atualizado");
    }
    componentWillUnmount(){
        console.log("Componente Removido!");
    }
  render() {
    return (
      <div>
            <h1>Componente</h1>
            <button onClick={this.ad}></button>
      </div>
    )
  }
}
