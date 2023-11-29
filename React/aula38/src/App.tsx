import { Component } from 'react'

export default class App extends Component {

  jogoDaVelha=[
    ['','',''],
    ['','',''],
    ['','','']];

    quadrado={
      border:"solid 2px #000",
      width:"100px",
      height:"100px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontSize:"50px"
    }

  Jogo(){
    return this.jogoDaVelha.map((item)=>
      <ul style={{display:'flex', margin:"0"}}>
        {
          item.map((quadrado)=>
            <li style={this.quadrado} onClick={()=>{
              
            }}>{quadrado}</li>
          )
        }
      </ul>
    )
  }
  controle(){

  }
  render() {
    return (
      <div>
        {this.Jogo()}
      </div>
    )
  }
}
